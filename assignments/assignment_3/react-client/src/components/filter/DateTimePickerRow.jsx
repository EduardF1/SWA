import DateTimePicker from "react-datetime-picker";
import React from "react";

function DateTimePickerRow({label, onChange, value}) {
    return (
        <>
            <div className= {label === 'Set start time' ? "row text-center mt-2" : "row text-center"}>
                <div className="offset-1 col-4 ">
                    <p>{label}</p>
                </div>
                <div className="col-7">
                    <DateTimePicker onChange={onChange} value={value} />
                </div>
            </div>
        </>
    )
}

export default DateTimePickerRow;