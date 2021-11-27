import React, {useEffect} from 'react';
import {PARTS, webSocketResource} from '../utility/constants';
import axios from 'axios';
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import Part3 from "./part3/Part3";
import Part4 from "./part4/Part4";


let webSocket = new WebSocket(webSocketResource);
const warningsSinceUrl = 'http://localhost:8080/warnings/since/';
let warningData = [];
let warningsSince = [];
let tableRows = [];

const Homepage = () => {

    useEffect(() => {
        subscribeToWarnings();
    }, [])

    /**
     * Function used to get the '#local-date' ui element, concatenate ':00.000' to its value (string).
     * @returns String The local time in UTF-8 format.
     */
    function getLocalTime() {
        const localTimeElement = document.getElementById('local-date');
        return localTimeElement.value;
    }

    /**
     * Function used to get the '#severity' ui element and retrieve its value (it is a select
     * element with several options' children).
     * @returns {number} The selected severity (in the UI by the user).
     */
    function getSeverity() {
        const severityElement = document.getElementById('severity');
        const severity = severityElement[severityElement.selectedIndex].value;
        return parseInt(severity);
    }

    /**
     * Function to get the warnings since the given date time (in UTF-8 format, ex.: 2018-12-03T13:00) from the weather data
     * REST Api. Api endpoint: http://localhost:8080/warnings/since/, valid subresource : date time (in UTF-8 format, ex.: 2018-12-03T13:00).
     * @returns {Promise<void>} The extracted warnings' data array from the promise.
     */
    async function getWarningsSince() {
        await axios
            .get(warningsSinceUrl + getLocalTime())
            .then(response => response.status === 200 ? response.data.warnings : new Error(response.statusText))
            .then(warnings => {
                warningsSince = warnings;
            });
        console.log(warningsSince);

        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'onoff');
        paragraph.innerText = JSON.stringify(warningsSince);
        console.log(warningsSince)
        document.getElementById(PARTS[1]).appendChild(paragraph);
    }

    //ON CHANGE FOR SEVERITY
    function changeSeverity() {
        const severity = getSeverity();
        if (severity === 0) {
            subscribeToWarnings()
        } else {
            unSubscribeToWarnings()
            const warningsTable = document.getElementById("warnings-table");
            // Warnings after severity input value change.
            const filteredWarnings = warningData.filter(warning => warning.severity === getSeverity() && warning.prediction !== null);
            // Clear the initial warnings' table data.
            while (warningsTable.hasChildNodes()) {
                warningsTable.removeChild(warningsTable.firstChild);
            }
            filteredWarnings.forEach(warning => {
                if (warning.severity === getSeverity()) {

                    var tr = document.createElement('tr');
                    tr.setAttribute("id", warning.id);
                    tr.innerHTML =
                        '<td>' + warning.id + '</td>' +
                        '<td>' + warning.severity + '</td>' +
                        '<td>' + warning.prediction.from + '</td>' +
                        '<td>' + warning.prediction.to + '</td>' +
                        '<td>' + warning.prediction.type + '</td>' +
                        '<td>' + warning.prediction.unit + '</td>' +
                        '<td>' + warning.prediction.time + '</td>' +
                        '<td>' + warning.prediction.place + '</td>' +
                        '<td>' + warning.prediction.precipitation_types + '</td>' +
                        '<td>' + warning.prediction.directions + '</td>';

                    document.getElementById("warnings-table").appendChild(tr);
                }
            })
        }
    }

    //PRINT THE TABLE
    function printToTable(warnings) {
        console.log(warnings)
        if (warnings.time !== null) {
            for (let warn of warnings.warnings) {
                printWarnings(warn);
            }
        }
        else {
            printWarnings(warnings);
        }
    }
    //PRINT TO HTML
    function printWarnings(warnings) {
        if (warnings != null) {
            warningData.push(warnings)
            var id = document.getElementById(warnings.id)
            if (id != null)
                id.remove();

            var tr = document.createElement('tr');
            tr.setAttribute("id", warnings.id)

            if (warnings.prediction != null) {
                tr.innerHTML =
                    '<td>' + warnings.id + '</td>' +
                    '<td>' + warnings.severity + '</td>' +
                    '<td>' + warnings.prediction.from + '</td>' +
                    '<td>' + warnings.prediction.to + '</td>' +
                    '<td>' + warnings.prediction.type + '</td>' +
                    '<td>' + warnings.prediction.unit + '</td>' +
                    '<td>' + warnings.prediction.time + '</td>' +
                    '<td>' + warnings.prediction.place + '</td>' +
                    '<td>' + warnings.prediction.precipitation_types + '</td>' +
                    '<td>' + warnings.prediction.directions + '</td>';

                document.getElementById("warnings-table").appendChild(tr);

            }
        }
    }

    function subscribeToWarnings() {
        /**
         * If the webSocket was previously closed, unsubscribed from, reinitialized the webSocket variable with a new
         * webSocket instance.
         */
        if (webSocket.CLOSED) {
            webSocket = new WebSocket(webSocketResource);
        }
        /**
         * Upon establishing a successful connection, send the 'subscribe' command, once the command is received by the server.
         * the connect is alive (the connection permits sending and receiving of data).
         */
        webSocket.onopen = () => {
            console.log('Web socket connection open.');
            webSocket.send(JSON.stringify('subscribe'))
        }
        /**
         * After establishing the connection to webSocket, whenever a message is sent from the server, parse the message
         * and pass the message data to the createTable function.
         * @param message Message received from the webSocket.
         */
        webSocket.onmessage = message => {
            const data = JSON.parse(message.data);
            console.log('Web socket communication occurring');
            console.log('Received data from Web socket:', data);
            printToTable(data);
        }
    }

    /**
     * Function used to unsubscribe from the webSocket, send a 'unsubscribe' string which is processed on the server
     * and will result in the closing of the web socket.
     */
    function unSubscribeToWarnings() {
        if (webSocket.OPEN) {
            console.log('Web socket connection closed.')
            webSocket.send(JSON.stringify('unsubscribe'))
        }
    }

    /**
     * Function to handle state change of the toggle checkbox. If the checkbox is checked,
     * the subscription to the web socket is made, otherwise the unsubscription occurs.
     * The isChecked flag variable is used to keep track of the toggle's value.
     */
    function onCheckboxClick() {
        const isChecked = document.getElementById('toggle').checked;
        isChecked ? subscribeToWarnings() : unSubscribeToWarnings();
    }

    return (
        <div>
            <Part1/>
            <Part2 getWarningsSinceProp={getWarningsSince}/>
            <Part3 changeSeverityProp={changeSeverity}/>
            <Part4 onCheckboxClickProp={onCheckboxClick}/>
        </div>
    );
};

export default Homepage;