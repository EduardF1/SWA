import React from "react";

import Form from "react-bootstrap/Form";

function SelectWindDirection({setDirection}) {
    return (
        <>
            <Form.Group controlId="add-data-form.select-wind-direction">
                <Form.Label>Wind Direction</Form.Label>
                <Form.Control as="select" onChange={e => setDirection(e.target.value)}>
                    <option>-</option>
                    <option>West</option>
                    <option>East</option>
                    <option>South</option>
                    <option>North</option>
                    <option>Southeast</option>
                    <option>Northeast</option>
                    <option>Southwest</option>
                    <option>Northwest</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default SelectWindDirection;