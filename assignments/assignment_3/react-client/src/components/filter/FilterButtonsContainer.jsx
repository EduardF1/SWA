import Button from "react-bootstrap/Button";
import React from "react";
import {retrieveAllData} from "../../utility/StoreHandler";

function FilterButtonsContainer(props, startDate, endDate, setStartDate, setEndDate) {

    /**
     * Calling callback function in the weather page through the props
     * Sets filter state in the JumbotronContainer component.
     */
    const triggerFilterSet = (value,startDate,endDate) => {
        props.triggerFilterSet(value,startDate,endDate);
    }

    /**
     * Callback function to handle the event of filter button being clicked.
     * triggerFilterSet sets the state in the JumbotronContainer component.
     */
    const handleApplyFilter = () => {
        triggerFilterSet(true,startDate,endDate);
        retrieveAllData(props.selectedCity, true, startDate, endDate);
    };

    /**
     *  triggerFilterSet sets the state in the JumbotronContainer component.
     */
    const handleResetFilter = () => {
        triggerFilterSet(false,null,null);
        retrieveAllData(props.selectedCity, false, startDate, endDate);
        setStartDate(new Date());
        setEndDate(new Date());
    };
    return (
        <>
            <div className="mt-2">
                <Button className="outline-btn" onClick={handleApplyFilter}>Apply filter</Button>{' '}
                <Button className="outline-btn" onClick={handleResetFilter}>Reset filter</Button>{' '}
            </div>
        </>
    )
}
export default FilterButtonsContainer;