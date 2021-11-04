import React from "react";

import Form from "react-bootstrap/Form";
import {CITIES, FORM_GROUP_LABELS} from "../../../assets/Constants";

export const SelectPlace = ({setPlace}) =>
    (
        <>
            <Form.Group controlId="add-data-form.select-place">
                <Form.Label>{FORM_GROUP_LABELS.PLACE_LABEL}</Form.Label>
                <Form.Control as="select" onChange={e => setPlace(e.target.value)}>
                    {CITIES.map((city, index) => (<option key={index}>{city}</option>))}
                </Form.Control>
            </Form.Group>
        </>
    )