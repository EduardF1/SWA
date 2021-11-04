import React from "react";

import Modal from "react-bootstrap/Modal";

function Header() {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Add new weather data</Modal.Title>
            </Modal.Header>
        </>
    )
}

export default Header;