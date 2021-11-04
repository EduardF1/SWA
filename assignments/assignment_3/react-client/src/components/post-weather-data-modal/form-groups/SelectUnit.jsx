import React from "react";

import Form from "react-bootstrap/Form";
import {FORM_GROUP_LABELS, UNIT_TYPE_OPTIONS} from "../../../assets/Constants";

export const SelectUnit = ({setUnit}) =>
    (
        <>
            <Form.Group controlId="add-data-form.select-unit">
                <Form.Label>{FORM_GROUP_LABELS.UNIT_LABEL}</Form.Label>
                <Form.Control as="select" onChange={e => setUnit(e.target.value)}>
                    {UNIT_TYPE_OPTIONS.map((unitType, index) => (<option key={index}>{unitType}</option>))}
                </Form.Control>
            </Form.Group>
        </>
    )