import React, {useEffect} from 'react';
import {Label} from './table/Label';
import {Input} from './table/Input';
import {Table} from './table/Table';
import {concatMap, interval} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {apiResource} from '../utility/constants';
import {clearTable, displayWarnings, getValueFromHtmlElement} from '../utility/tableHelpers';
import {filterBySeverity, filterSinceLastUpdate} from '../utility/filter';
import axios from 'axios';

let warningsCache = [];
let timeOfUnsubscription = '';
let isSubscribed = false;
let subscription = {};
let minSeverity;
let subscriptionInterval = interval(3000)

export const Homepage = () => {

    const onSubscribe = () => {
        showWarningData()
        timeOfUnsubscription = null
        if (!isSubscribed) {
            subscribe()
            console.log(`[${new Date().toISOString()}]: Subscribed`)
        }
    }

    const onUnsubscribe = () => {
        timeOfUnsubscription = new Date()
        subscription.unsubscribe()
        isSubscribed = false
        console.log(`[${timeOfUnsubscription.toISOString()}]: Unsubscribed`)
    }

    const subscribe = () => {
        subscription = subscriptionInterval.pipe(
            concatMap(() => ajax.getJSON(apiResource))
        ).subscribe({
            next: warnings => {
                const severity = getValueFromHtmlElement('severity-text-box');
                const newWarnings = filterBySeverity(warnings, severity);
                const changedWarnings = filterSinceLastUpdate(warningsCache, newWarnings);

                // Clear the cache
                warningsCache = [];
                newWarnings?.forEach(warning => warningsCache.push(warning));

                displayWarnings('warnings-table-body', newWarnings);

                // Clear old warnings
                clearTable('changes-table-body');
                displayWarnings('changes-table-body', changedWarnings);
            },
            error: error => console.log(`[${new Date().toISOString()}]: ${error}`)
        });
        isSubscribed = true;
        console.log(`[${new Date().toISOString()}]: Subscribed`)
    }

    useEffect(() => {
        if (getValueFromHtmlElement('severity-text-box') !== '') {
            showWarningData();
            subscribe();
        }
    }, [])

    window.onunload = () => {
        subscription.unsubscribe()
        console.log(`[${new Date().toISOString()}]: Unsubscribed`)
    }

    const showWarningData = () => {
        axios.get(apiResource)
            .then(response => response.status === 200 ? response.data.warnings : new Error(response.statusText))
            .then(warningData => {
                minSeverity = parseInt(getValueFromHtmlElement('severity-text-box'));
                const newWarnings = filterBySeverity(warningData, minSeverity)
                const changedWarnings = filterSinceLastUpdate(warningsCache, newWarnings)

                // Empty cache after last updated warnings have been filtered, to ensure that the next update will show valid results
                warningsCache = []
                newWarnings.forEach(warning => warningsCache.push(warning))

                clearTable('warnings-table-body')
                displayWarnings('warnings-table-body', newWarnings)

                clearTable('changes-table-body')
                displayWarnings('changes-table-body', changedWarnings)
            }).catch(error => console.log(`[${new Date().toISOString()}]: ${error}`));
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
                <Input id={'on-button'} onclick={onSubscribe} type={'radio'} name={'updating'} value={'Subscribe'} checked={'true'} label={'Yes'}/>
                <Label _for={'off-button'} label={'Off'}/>
                <Input id={'off-button'} onclick={onUnsubscribe} type={'radio'} name={'updating'} value={'Unsubscribe'} labe={'No'}/>
            </div>
            <Table divId={'warnings-div'} header={'Warnings feed (updated every 3 seconds):'} tableId={'warnings-table'} bodyId={'warnings-table-body'}/>
            <Table divId={'changes-div'} header={'Changed warnings since last update:'} tableId={'changes-table'} bodyId={'changes-table-body'}/>
        </div>
    );
}

