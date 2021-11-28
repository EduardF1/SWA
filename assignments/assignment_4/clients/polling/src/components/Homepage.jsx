import React, {useCallback, useEffect, useRef, useState} from 'react';
import {concatMap, interval} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {apiResource} from '../utility/constants';
import {filterBySeverity, filterSinceLastUpdate} from '../utility/filter';
import axios from 'axios';
import './homePage.css';
import Part1 from "./part1/Part1";
import Part2 from "./part2/Part2";
import Part3 from "./part3/Part3";
import Part4 from "./part4/Part4";

export const Homepage = () => {

    const [warningsData, setWarningsData] = useState([]);
    const [warningsSince, setWarningsSince] = useState([]);
    const previousData = useRef([]);
    const warningsCache = useRef([]);
    const severityValue = useRef(0);
    const subscription = useRef(null);
    const isSubscribed = useRef(false);
    const timeOfUnsubscription = useRef(null);
    const subscriptionInterval = 10000;

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
        //setWarningsData(warnings => [...warnings, ...warningsList]);
        //setWarningsData([...warningsData, ...warningsList]);
    }, [])

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

    const subscribe = useCallback(() => {
        subscription.current = interval(subscriptionInterval).pipe(concatMap(() => ajax.getJSON(apiResource))).subscribe({
            next: warnings => {
                const newWarnings = filterBySeverity(warnings, severityValue.current);
                const changedWarnings = filterSinceLastUpdate(warningsCache.current, newWarnings);

                // Update the cache
                warningsCache.current = newWarnings;

                newWarnings.forEach(warning => {
                    previousData.current.push(warning);
                })

                buildData();
                buildWarningsSince(changedWarnings);
            },
            error: error => console.log(`[${new Date().toISOString()}]: ${error}`)
        });
        isSubscribed.current = true;
        console.log(`[${new Date().toISOString()}]: Subscribed`)
    },[buildData])

    const loadInitialWarningsData = useCallback(() => {
        axios.get(apiResource)
            .then(response => response.status === 200 ? response.data.warnings : new Error(response.statusText))
            .then(warningData => {
                previousData.current = warningData;
                buildData();
            }).catch(error => console.log(`[${new Date().toISOString()}]: ${error}`));
    },[buildData])

    useEffect(() => {
        loadInitialWarningsData();
        subscribe();

        return () => {
            subscription.current.unsubscribe()
            console.log(`[${new Date().toISOString()}]: Unsubscribed`)
        }
    }, [subscribe, loadInitialWarningsData])

    /**
     * Function to handle state change of the toggle checkbox. If the checkbox is checked,
     * the subscription to the web socket is made, otherwise the unsubscription occurs.
     * The isChecked flag variable is used to keep track of the toggle's value.
     */
    const onCheckboxClick = () => {
        const isChecked = document.getElementById('toggle').checked;
        isChecked ? onSubscribe() : onUnsubscribe();
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

    //ON CHANGE FOR SEVERITY
    const changeSeverity = () => {
        severityValue.current = getSeverity();
    }

    const onSubscribe = () => {
        if (!isSubscribed.current) {
            subscribe()
        }
    }

    const onUnsubscribe = () => {
        timeOfUnsubscription.current = new Date()
        subscription.current.unsubscribe()
        isSubscribed.current = false
        console.log(`[${timeOfUnsubscription.current.toISOString()}]: Unsubscribed`)
    }

    return (
        <div className={'wrapper'}>
            <Part1 rowData={warningsData}/>
            <Part2 rowData={warningsSince}/>
            <Part3 changeSeverityProp={changeSeverity}/>
            <Part4 onCheckboxClickProp={onCheckboxClick}/>
        </div>
    );
}
