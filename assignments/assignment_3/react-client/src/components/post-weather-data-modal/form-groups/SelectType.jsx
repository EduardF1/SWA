import React from "react";

import Form from "react-bootstrap/Form";
import {DATA_TYPES, FORM_GROUP_LABELS} from "../../../assets/Constants";

export const SelectType = ({setType}) =>
    (
        <>
            <Form.Group controlId="add-data-form.select-type">
                <Form.Label>{FORM_GROUP_LABELS.DATA_TYPE_LABEL}</Form.Label>
                <Form.Control as="select" onChange={e => setType(e.target.value)}>
                    {DATA_TYPES.map((dataType, index) => (<option key={index}>{dataType}</option>))}
                </Form.Control>
            </Form.Group>
        </>
    )