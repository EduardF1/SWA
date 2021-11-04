import React from "react";

import Form from "react-bootstrap/Form";
import {FORM_GROUP_LABELS, WIND_DIRECTION_OPTIONS} from "../../../assets/Constants";

export const SelectWindDirection = ({setDirection}) =>
    (
        <>
            <Form.Group controlId="add-data-form.select-wind-direction">
                <Form.Label>{FORM_GROUP_LABELS.WIND_DIRECTION_LABEL}</Form.Label>
                <Form.Control as="select" onChange={e => setDirection(e.target.value)}>
                    {WIND_DIRECTION_OPTIONS.map((windDirection, index) => (<option key={index}>{windDirection}</option>))}
                </Form.Control>
            </Form.Group>
        </>
    )