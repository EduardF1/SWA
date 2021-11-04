import React from "react";

import Form from "react-bootstrap/Form";

function SelectType({setType}) {
    return (
        <>
            <Form.Group controlId="add-data-form.select-type">
                <Form.Label>Select type of data</Form.Label>
                <Form.Control as="select" onChange={e => setType(e.target.value)}>
                    <option>temperature</option>
                    <option>cloud coverage</option>
                    <option>precipitation</option>
                    <option>wind speed</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default SelectType;