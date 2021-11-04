import React from "react";

import Form from "react-bootstrap/Form";

function SelectPlace({setPlace}) {
    return (
        <>
            <Form.Group controlId="add-data-form.select-place">
                <Form.Label>Select Place (City)</Form.Label>
                <Form.Control as="select" onChange={e => setPlace(e.target.value)}>
                    <option>Horsens</option>
                    <option>Copenhagen</option>
                    <option>Aarhus</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default SelectPlace;