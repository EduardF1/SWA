import React, {useEffect, useRef, useState} from 'react';
import {PARTS, warningsSinceUrl, webSocketResource} from '../utility/constants';
import axios from 'axios';
import Part1 from './part1/Part1';
import Part2 from './part2/Part2';
import Part3 from './part3/Part3';
import Part4 from './part4/Part4';

let warningData = [];
let warningsSince = [];

const Homepage = () => {
    const [warningsData, setWarningsData] = useState([]);
    const webSocket = useRef(null);
    const severityValue = useRef(0);

    /**
     * Function to create a table from the web socket warnings' response data. The response data
     * consists of two properties:
     *  - time (check performed to see if a time exists)
     *  - warnings (if there is a warnings' report time, display each warning)
     */
    function createTable() {
        if (warningData.length !== 0) {
            warningData.forEach(warning => displayWarning(warning));
        }
    }

    // Initial component mount
    useEffect(() => {
        createTable();
    }, [warningsData])

    useEffect(() => {
        webSocket.current = new WebSocket(webSocketResource);
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

        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'onoff');
        paragraph.innerText = JSON.stringify(warningsSince);
        //console.log(warningsSince)
        document.getElementById(PARTS[1]).appendChild(paragraph);
    }

    function getTableRowContent(warning) {
        return '<td>' + warning.id + '</td>' +
            '<td>' + warning.severity + '</td>' +
            '<td>' + warning.prediction.from + '</td>' +
            '<td>' + warning.prediction.to + '</td>' +
            '<td>' + warning.prediction.type + '</td>' +
            '<td>' + warning.prediction.unit + '</td>' +
            '<td>' + warning.prediction.time + '</td>' +
            '<td>' + warning.prediction.place + '</td>' +
            '<td>' + (warning.prediction.precipitation_types ? warning.prediction.precipitation_types : 'N/A') + '</td>' +
            '<td>' + (warning.prediction.directions ? warning.prediction.directions : 'N/A') + '</td>';
    }

    //ON CHANGE FOR SEVERITY
    function changeSeverity() {
        severityValue.current = getSeverity();
    }

    function createRowAndSetItsId(warning) {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id', warning.id)
        return tableRow;
    }

    /**
     * Display a warning (create a table row for it).
     * @param warning Warning object for which the row is created.
     */
    function displayWarning(warning) {
        if (warning !== null) {
            warningData.push(warning);
            const id = document.getElementById(warning.id);
            if (id !== null) {
                id.remove();
            }
            if (warning.prediction !== null) {
                const row = createRowAndSetItsId(warning);
                row.innerHTML = getTableRowContent(warning);
                document.getElementById('warnings-table').appendChild(row);
            }
        }
    }

    function subscribeToWarnings() {
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
                const filteredWarnings = warnings.filter(warning => warning.prediction);
                // Display each of the warnings.
                filteredWarnings.forEach(warning => displayWarning(warning));
                // Set the state of the warningsData.
                setWarningsData(filteredWarnings);
            }
            // Handle the responses after the initial (objects)
            else if (data.id && data.severity && data.prediction) {
                // If the severity of the data matches the currently selected severity, receive only such warnings.
                if (data.severity === severityValue.current) {
                    displayWarning(data);
                }
                // Handle default case, any severity level of a warning
                else if (severityValue.current === 0) {
                    displayWarning(data)
                }
            }
        }
    }

    /**
     * Function used to unsubscribe from the webSocket, send a 'unsubscribe' string which is processed on the server
     * and will result in the closing of the web socket.
     */
    function unSubscribeToWarnings() {
        if (webSocket.current.OPEN) {
            console.log('Web socket connection closed.')
            webSocket.current.send(JSON.stringify('unsubscribe'))
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