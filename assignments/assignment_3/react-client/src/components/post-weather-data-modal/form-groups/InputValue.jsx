import React from "react";

import Form from "react-bootstrap/Form";
import {FORM_GROUP_LABELS} from "../../../assets/Constants";

export const InputValue = ({setValue}) =>
    (
        <>
            <Form.Group controlId="add-data-form.input-value">
                <Form.Label>{FORM_GROUP_LABELS.VALUE_LABEL}</Form.Label>
                <Form.Control placeholder="Numeric values only" onChange={e => setValue(e.target.value)} />
            </Form.Group>
        </>
    )