import React from "react";

import Modal from "react-bootstrap/Modal";
import {MODAL_TITLE_LABEL} from "../../../assets/Constants";

export const Header = () =>
    <Modal.Header closeButton>
        <Modal.Title>{MODAL_TITLE_LABEL}</Modal.Title>
    </Modal.Header>
