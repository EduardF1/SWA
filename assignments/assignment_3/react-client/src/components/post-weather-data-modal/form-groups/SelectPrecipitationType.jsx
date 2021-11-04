import React from "react";

import Form from "react-bootstrap/Form";

function SelectPrecipitationType({setPrecipitationType}) {
    return (
        <>
            <Form.Group controlId="add-data-form.select-precipitation-type">
                <Form.Label>Type (Only for the precipitation type of data)</Form.Label>
                <Form.Control as="select" onChange={e => setPrecipitationType(e.target.value)}>
                    <option>-</option>
                    <option>rain</option>
                    <option>snow</option>
                    <option>sleet</option>
                    <option>hail</option>
                </Form.Control>
            </Form.Group>
        </>
    )
}

export default SelectPrecipitationType;