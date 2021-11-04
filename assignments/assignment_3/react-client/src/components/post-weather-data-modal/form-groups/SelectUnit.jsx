import React from "react";

import Form from "react-bootstrap/Form";

function SelectUnit({setUnit}) {
    return (
        <>
            <Form.Group controlId="add-data-form.select-unit">
                <Form.Label>Select unit for data</Form.Label>
                <Form.Control as="select" onChange={e => setUnit(e.target.value)}>
                    <option>°C</option>
                    <option>F</option>
                    <option>km/h</option>
                    <option>m/s</option>
                    <option>%</option>
                    <option>mm</option>
                    <option>inch</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default SelectUnit;