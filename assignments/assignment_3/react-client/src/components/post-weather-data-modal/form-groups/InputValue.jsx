import React from "react";

import Form from "react-bootstrap/Form";

function InputValue({setValue}) {
    return (
        <>
            <Form.Group controlId="add-data-form.input-value">
                <Form.Label>Enter value</Form.Label>
                <Form.Control placeholder="Numeric values only" onChange={e => setValue(e.target.value)} />
            </Form.Group>
        </>
    )
}

export default InputValue;