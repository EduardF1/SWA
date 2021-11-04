import React from "react";

import Form from "react-bootstrap/Form";
import {FORM_GROUP_LABELS, PRECIPITATION_TYPE_OPTIONS} from "../../../assets/Constants";

export const SelectPrecipitationType = ({setPrecipitationType}) =>
    (
        <>
            <Form.Group controlId="add-data-form.select-precipitation-type">
                <Form.Label>{FORM_GROUP_LABELS.PRECIPITATION_TYPE_LABEL}</Form.Label>
                <Form.Control as="select" onChange={e => setPrecipitationType(e.target.value)}>
                    {PRECIPITATION_TYPE_OPTIONS.map((precipitationType, index) => (<option key={index}>{precipitationType}</option>))}
                </Form.Control>
            </Form.Group>
        </>
    )