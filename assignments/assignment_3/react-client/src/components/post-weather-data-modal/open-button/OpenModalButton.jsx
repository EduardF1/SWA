import React from "react";

import Button from "react-bootstrap/Button";
import {MODAL_OPEN_BUTTON_LABEL} from "../../../assets/Constants";

export const OpenModalButton = ({togglePostDialog}) =>
    <Button className="outline-btn" onClick={togglePostDialog}>
        {MODAL_OPEN_BUTTON_LABEL}
    </Button>