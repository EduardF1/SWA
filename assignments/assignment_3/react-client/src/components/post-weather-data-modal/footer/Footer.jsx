import React from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {FOOTER_LABELS} from "../../../assets/Constants";

export const Footer = ({togglePostDialog, handleSaveData}) =>
    (
        <>
            <Modal.Footer>
                <Button variant="secondary" onClick={togglePostDialog}>
                    {FOOTER_LABELS[0]}
                </Button>
                <Button variant="primary" onClick={handleSaveData}>
                    {FOOTER_LABELS[1]}
                </Button>
            </Modal.Footer>
        </>
    )