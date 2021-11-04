import React,{ useState } from 'react';

import DateTimePickerRow from "./DateTimePickerRow";
import FilterButtonsContainer from "./FilterButtonsContainer";

function Filter(props) {

    // Filter state hooks
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    // Setting states for the Filter.
    const onChangeStartDate = startDate => setStartDate(startDate);
    const onChangeEndDate = endDate => setEndDate(endDate);

    return (
        <div>
            <DateTimePickerRow label={'Set start time'} onChange={onChangeStartDate} value={startDate}/>
            <DateTimePickerRow label={'Set end time'} onChange={onChangeEndDate} value={endDate}/>
            <FilterButtonsContainer props={props} startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        </div>
    );
}
export default Filter;