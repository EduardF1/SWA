import React from "react";

import Form from "react-bootstrap/Form";

import DateTimePicker from "react-datetime-picker";
import {FORM_GROUP_LABELS} from "../../../assets/Constants";

export const SelectDateTime = ({onChange, dateTime}) =>
    (
        <>
            <Form.Label>{FORM_GROUP_LABELS.DATE_TIME_LABEL}&nbsp;&nbsp;&nbsp;</Form.Label>
            <DateTimePicker onChange={onChange} value={dateTime}/>
        </>
    )
