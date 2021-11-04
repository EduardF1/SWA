import React from "react";

import Form from "react-bootstrap/Form";

import DateTimePicker from "react-datetime-picker";

function SelectDateTime({onChange, dateTime}) {
    return (
        <>
            <Form.Label>Set time of measurement:&nbsp;&nbsp;&nbsp;</Form.Label>
            <DateTimePicker onChange={onChange} value={dateTime}/>
        </>
    )
}

export default SelectDateTime;