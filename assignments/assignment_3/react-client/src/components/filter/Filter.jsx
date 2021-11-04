import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import React from 'react';
import {retrieveAllData} from "../../utility/StoreHandler";
import DateTimePickerRow from "./DateTimePickerRow";
import {FILTER_LABELS} from "../../assets/Constants";

function Filter(props) {

    // Filter state hooks
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    /**
     *  Apply filter button callback function.
     *  Triggers the initialization of the DateInterval filter in the HomePage component.
     */
    const handleApplyFilter = () => {
        triggerFilterSet(true,startDate,endDate);
        retrieveAllData(props.selectedCity, true, startDate, endDate);
    };

    /**
     *  Callback function in the JumbotronContainer component through the passed props.
     *  Resets the states of the DateInterval filter in the HomePage component.
     */
    const handleResetFilter = () => {
        triggerFilterSet(false,null,null);
        retrieveAllData(props.selectedCity, false, startDate, endDate);
        setStartDate(new Date());
        setEndDate(new Date());
    };

    /**
     *  Callback function in the JumbotronContainer component through the passed props.
     *  Triggers the initialization of the DateInterval filter in the HomePage component.
     */
    const triggerFilterSet = (value,sTime,eTime) => {
        props.triggerFilterSet(value,sTime,eTime);
    }

    // Date states initialization
    const onChangeStartDate = startTime => setStartDate(startTime);
    const onChangeEndDate = endTime => setEndDate(endTime);

    return (
        <div>
            <DateTimePickerRow onChange={onChangeStartDate} value={startDate} label={FILTER_LABELS[0]}/>
            <DateTimePickerRow onChange={onChangeEndDate} value={endDate} label={FILTER_LABELS[1]}/>
            <div className="mt-2">
                <Button className="outline-btn" onClick={handleApplyFilter}>Apply filter</Button>{' '}
                <Button className="outline-btn" onClick={handleResetFilter}>Reset filter</Button>{' '}
            </div>
        </div>
    );
}
export default Filter;