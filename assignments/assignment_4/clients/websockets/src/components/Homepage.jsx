import React, {useEffect} from 'react';
import {subscribeCommand, webSocketResource} from '../utility/constants';
import axios from 'axios';
import {TableHeader} from "./table/TableHeader";


let webSocket = new WebSocket(webSocketResource);
const warningsSinceUrl = 'http://localhost:8080/warnings/since/';
let warningData = [];
let warningsSince = [];

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
        const localTime = localTimeElement.value;
        return localTime;
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
        document.getElementById('part2').appendChild(paragraph);
    }

    //ON CHANGE FOR SEVERITY
    function changeSeverity() {
        var severity = getSeverity()
        if (severity === 0) {
            subscribeToWarnings()
        } else {
            unSubscribeToWarnings()
            var warningsTable = document.getElementById("warnings-table")
            // Warnings after severity input value change.
            const filteredWarnings = warningData.filter(warning => warning.severity === getSeverity() && warning.prediction !== null);
            // Clear the initial warnings' table data.
            while (warningsTable.hasChildNodes()){
                warningsTable.removeChild(warningsTable.firstChild);
            }
            filteredWarnings.forEach(warning => {
                if(warning.severity === getSeverity()){
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
        if(webSocket.CLOSED){
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
            <div>
                <h3>Part 1:</h3>
                <h6 id='part1'>
                    • display current warnings when the page load and update them without reloading the page when they are updated on
                    the server.
                    <div>
                        <table>
                            <TableHeader/>
                            <tbody id='warnings-table'>
                            </tbody>
                        </table>
                    </div>
                </h6>
            </div>
            <div>
                <h3>Part 2:</h3>
                <h6 id='part2'>
                    • display changes in warnings since last update.
                    <div>WARNINGS SINCE LAST UPDATE: <input type='datetime-local' id='local-date' defaultValue={'2021-11-01T13:00:00.000'}/>
                        <button onClick={getWarningsSince}>Get warnings since</button>
                    </div>
                </h6>
            </div>
            <div>
                <h3>Part 3:</h3>
                <h6 id='part3'>
                    • allow the user to set a minimal severity level to only display some of the warnings. Don't reload the warnings
                    when the user changes the minimal severity level.
                    <div id='mainWarnings'>MAIN WARNINGS:
                        <select className='bootstrap-select' id='severity' onChange={changeSeverity}>
                            <option value='0' defaultChecked={true}>All severities</option>
                            <option value='1'>Severity 1</option>
                            <option value='2'>Severity 2</option>
                            <option value='3'>Severity 3</option>
                            <option value='4'>Severity 4</option>
                            <option value='5'>Severity 5</option>
                            <option value='6'>Severity 6</option>
                        </select>
                    </div>
                </h6>
            </div>
            <div>
                <h3>Part 4:</h3>
                <h6 id='part4'>
                    • allow the user to complete turn off warnings. Do not receive warnings from the server while they are turned off,
                    but reload them when they are turned on again.
                    <div id='onoffWarnings'>WARNINGS ON/OFF :
                        <input type='checkbox' id='toggle' onClick={onCheckboxClick} defaultChecked={true}/>
                    </div>
                </h6>
            </div>
        </div>
    );
};

export default Homepage;