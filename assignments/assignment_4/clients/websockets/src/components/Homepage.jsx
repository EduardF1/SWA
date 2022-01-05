// React
import React, {useCallback, useEffect, useRef, useState} from 'react';
// 3rd Party
import axios from 'axios';
// Own
import './homePage.css';
import {Part1} from './part1/Part1';
import {Part2} from './part2/Part2';
import {Part3} from './part3/Part3';
import {Part4} from './part4/Part4';
import {warningsSinceUrl, webSocketResource} from '../utility/constants';


export const Homepage = () => {
    // Component states
    const [warningsData, setWarningsData] = useState([]);
    const [warningsSince, setWarningsSince] = useState([]);
    const previousData = useRef([]);
    const webSocket = useRef(null);
    const severityValue = useRef(0);

    /**
     * Function used to build the data (Array of warnings objects), by using the "useCallback()" hook,
     * the function will trigger only if the inputs are changed.
     * @type {(function(): void)|*}
     */
    const buildData = useCallback(() => {
        const warningsList = [];
        previousData.current.forEach(warning => {
            warningsList.push({
                id: warning.id,
                severity: warning.severity,
                from: warning.prediction.from,
                to: warning.prediction.to,
                type: warning.prediction.type,
                unit: warning.prediction.unit,
                time: warning.prediction.time,
                place: warning.prediction.place,
                precipitation_types: warning.prediction.precipitation_types ? warning.prediction.precipitation_types : 'N/A',
                directions: warning.prediction.directions ? warning.prediction.directions : 'N/A'
            })
        })
        setWarningsData(warningsList);
    }, [])

    const subscribeToWarnings = useCallback(() => {
        /**
         * If the webSocket was previously closed, unsubscribed from, reinitialized the webSocket variable with a new webSocket instance.
         */
        if (webSocket.current.CLOSED) {
            webSocket.current = new WebSocket(webSocketResource);
        }
        /**
         * Upon establishing a successful connection, send the 'subscribe' command, once the command is received by the server.
         * the connect is alive (the connection permits sending and receiving of data).
         */
        webSocket.current.onopen = () => {
            console.log('Web socket connection open.');
            webSocket.current.send(JSON.stringify('subscribe'))
        }

        /**
         * After establishing the connection to webSocket, whenever a message is sent from the server, parse the message
         * and pass the message data to the createTable function. The data object initially consists of two properties,
         * time and warnings, after the initial response, the web socket will send one response message every time.
         * @param message Message received from the webSocket.
         */
        webSocket.current.onmessage = message => {
            const data = JSON.parse(message.data);
            // Handle the initial response (array)
            if (data.time && data.warnings) {
                // Extract the warnings from the data
                const warnings = data.warnings;
                // Filter the warnings against possible null values for the prediction property.
                previousData.current = warnings.filter(warning => warning.prediction);
                // Set the state of the warningsData.
                buildData();
            }
            // Handle the responses after the initial (objects)
            else if (data.id && data.severity && data.prediction) {
                // If the severity of the data matches the currently selected severity, receive only such warnings.
                if (data.severity === severityValue.current) {
                    previousData.current.push(data);
                    buildData();
                }
                // Handle default case, any severity level of a warning
                else if (severityValue.current === 0) {
                    previousData.current.push(data);
                    buildData();
                }
            }
        }
    }, [buildData])

    useEffect(() => {
        webSocket.current = new WebSocket(webSocketResource);
        subscribeToWarnings();
    }, [subscribeToWarnings])

    /**
     * Function used to get the '#local-date' ui element, concatenate ':00.000' to its value (string).
     * @returns String The local time in UTF-8 format.
     */
    const getLocalTime = () => {
        const localTimeElement = document.getElementById('local-date');
        return localTimeElement.value;
    }

    /**
     * Function used to get the '#severity' ui element and retrieve its value (it is a select
     * element with several options' children).
     * @returns {number} The selected severity (in the UI by the user).
     */
    const getSeverity = () => {
        const severityElement = document.getElementById('severity');
        const severity = severityElement[severityElement.selectedIndex].value;
        return parseInt(severity);
    }

    const buildWarningsSince = (data) => {
        const warningsSince = [];
        data.forEach(warning => {
            warningsSince.push({
                id: warning.id,
                severity: warning.severity,
                from: warning.prediction.from,
                to: warning.prediction.to,
                type: warning.prediction.type,
                unit: warning.prediction.unit,
                time: warning.prediction.time,
                place: warning.prediction.place,
                precipitation_types: warning.prediction.precipitation_types ? warning.prediction.precipitation_types : 'N/A',
                directions: warning.prediction.directions ? warning.prediction.directions : 'N/A'
            })
        })
        setWarningsSince(warningsSince);
    }

    /**
     * Function to get the warnings since the given date time (in UTF-8 format, ex.: 2018-12-03T13:00) from the weather data
     * REST Api. Api endpoint: http://localhost:8080/warnings/since/, valid subresource : date time (in UTF-8 format, ex.: 2018-12-03T13:00).
     * @returns {Promise<void>} The extracted warnings' data array from the promise.
     */
    const getWarningsSince = async () => {
        await axios
            .get(warningsSinceUrl + getLocalTime())
            // Check the response status code
            .then(response => response.status === 200 ? response.data.warnings : new Error(response.statusText))
            // Extract the warnings from the promise once it is fulfilled.
            .then(warnings => buildWarningsSince(severityValue.current === 0 ? warnings : warnings.filter(warning => warning.severity >= severityValue.current)));
    }

    /**
     * Change severity event handle.
     */
    const changeSeverity = () => severityValue.current = getSeverity();

    /**
     * Function used to unsubscribe from the webSocket, send a 'unsubscribe' string which is processed on the server
     * and will result in the closing of the web socket.
     */
    const unSubscribeToWarnings = () => {
        if (webSocket.current.OPEN) {
            console.log('Web socket connection closed.');
            webSocket.current.send(JSON.stringify('unsubscribe'));
            webSocket.current.close();
        }
    };

    /**
     * Function to handle state change of the toggle checkbox. If the checkbox is checked,
     * the subscription to the web socket is made, otherwise the unsubscription occurs.
     * The isChecked flag variable is used to keep track of the toggle's value.
     */
    const onCheckboxClick = () => {
        const isChecked = document.getElementById('toggle').checked;
        isChecked ? subscribeToWarnings() : unSubscribeToWarnings();
    };

    return (
        <div className={'wrapper'}>
            <Part1 rowData={warningsData}/>
            <Part2 getWarningsSinceProp={getWarningsSince} rowData={warningsSince}/>
            <Part3 changeSeverityProp={changeSeverity}/>
            <Part4 onCheckboxClickProp={onCheckboxClick}/>
        </div>
    );
};