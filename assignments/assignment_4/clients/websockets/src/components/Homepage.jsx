import React, {useEffect} from 'react';
import {clearTable, displayWarnings, getValueFromHtmlElement} from "../utility/tableHelpers";
import {areWarningsMatchingTheInputSeverity, areWarningsChangedSinceLastUpdate} from "../utility/filter";
import {Label} from "./table/Label";
import {Input} from "./table/Input";
import {Table} from "./table/Table";
import {apiResource, serverWarningsSinceUrl, subscribeCommand, unsubscribeCommand, webSocketResource} from "../utility/constants";
import axios from "axios";

let warningsCache = [];
let timeOfUnsubscription = '';
const webSocket = new WebSocket(webSocketResource);

const Homepage = () => {
    /*
        Functional component approach to class-based components' lifecycle hooks.
        https://stackoverflow.com/questions/26059762/callback-when-dom-is-loaded-in-react-js
     */
    useEffect(() => {
        if (getValueFromHtmlElement('severity-text-box') !== '') {
            showWarningData();
            subscribeToSocket();
        }
    }, []);

    function showWarningData() {
        axios.get(apiResource)
            .then(response => response.status === 200 ? response.data.warnings : new Error(response.statusText))
            .then(warningData => {
                console.log(`[${new Date().toISOString()}]: Endpoint called ${apiResource}`)

                const severity = getValueFromHtmlElement("severity_text_box")

                warningData.warnings.forEach(warning => {
                    const severeEnoughWarning = areWarningsMatchingTheInputSeverity(warning, severity)
                    const warningSinceLastUpdate = areWarningsChangedSinceLastUpdate(warningsCache, severeEnoughWarning)

                    if (warningsCache.length > 30) {
                        // To avoid making the page too big
                        warningsCache = []

                        clearTable("warnings-table-body")
                        clearTable("changes-table-body")
                    }

                    warningsCache.push(severeEnoughWarning)

                    if (severeEnoughWarning !== null) {
                        displayWarnings("warnings-table-body", severeEnoughWarning)
                    }
                    if (warningSinceLastUpdate !== null) {
                        displayWarnings("changes-table-body", warningSinceLastUpdate)
                    }
                })
            })
            .catch(error => console.log(`[${new Date().toISOString()}]: ${error}`))
    }

    function displayWebSocketClosingMessage(webSocket){
        webSocket.onclose = () => console.log(`[${new Date().toISOString()}]: Socket connection closed`)
    }

    function displayWebSocketErrors(webSocket) {
        webSocket.onerror = error => console.error(`[${new Date().toISOString()}]: An error has occurred in web socket communication ${error}`)
    }


    function initializeSubscription() {
        if (timeOfUnsubscription !== '') {
            // Show data that has been missed since the user has unsubscribed
            const endpoint = `${serverWarningsSinceUrl}${timeOfUnsubscription.toISOString()}`
            showWarningData(endpoint)
            timeOfUnsubscription = null
        }

        if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(JSON.stringify({command: subscribeCommand }))
            console.log(`[${new Date().toISOString()}]: Subscribed`)
        }
    }

    function handleWebsocketMessages() {
        webSocket.onmessage = message => {
            const warningData = JSON.parse(message.data);
            const severity = getValueFromHtmlElement('severity-text-box');
            console.log(warningData)
            // Test the web socket data response against the severity entered in the text box.
            const severeWarningData = areWarningsMatchingTheInputSeverity(warningData, severity);
            const changedWarnings = areWarningsChangedSinceLastUpdate(warningsCache, severeWarningData);
            warningsCache.push(warningData);
            console.log(severeWarningData)
            if (warningData !== null) displayWarnings('warnings-table-body', severeWarningData);
            // Since messages arrive sequentially this should be okay (every update has 1 new message at most)
            clearTable('changes-table-body');
            if (changedWarnings !== null) displayWarnings('changes-table-body', changedWarnings);
        };

        initializeSubscription();
    }

    const initializeWebSocketConnection = () => {
        if(webSocket !== null){
            webSocket.onopen = () => webSocket.send(JSON.stringify({command: subscribeCommand}));
            console.log('socket open')
            handleWebsocketMessages();
        }
    }

    const subscribeToSocket = () => {
        console.log('hit')
        initializeWebSocketConnection();
    }

    const unsubscribeFromSocket = (webSocket) => {
        if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(JSON.stringify({ command: unsubscribeCommand }))
        }

        timeOfUnsubscription = new Date()
        console.log(`[${timeOfUnsubscription.toISOString()}]: Unsubscribed`)
    }
    
    return (
        <div>
            <div>
                <Label _for={'severity'} label={'Severity'}/>
                <Input id={'severity-text-box'} type={'text'} value={1}/>
            </div>
            <div>
                <Label _for={'update-warnings'} label={'Update warnings?'}/>
                <Label _for={'on-button'} label={'On'}/>
                <Input id={'on-button'} onclick={() => subscribeToSocket(webSocket)} type={'radio'} name={'updating'} value={'Subscribe'} checked={'true'} label={'Yes'}/>
                <Label _for={'off-button'} label={'Off'}/>
                <Input id={'off-button'} onclick={() => unsubscribeFromSocket(webSocket)} type={'radio'} name={'updating'} value={'Unsubscribe'} labe={'No'}/>
            </div>
            <Table divId={'warnings-div'} header={'Warnings feed (updated every 3 seconds):'} tableId={'warnings-table'} bodyId={'warnings-table-body'}/>
            <Table divId={'changes-div'} header={'Changed warnings since last update:'} tableId={'changes-table'} bodyId={'changes-table-body'}/>
        </div>
    );
};

export default Homepage;