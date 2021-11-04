import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Footer({togglePostDialog, handleSaveData}) {
    return (
        <>
            <Modal.Footer>
                <Button variant="secondary" onClick={togglePostDialog}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveData}>
                    Add value
                </Button>
            </Modal.Footer>
        </>
    )
}

export default Footer;