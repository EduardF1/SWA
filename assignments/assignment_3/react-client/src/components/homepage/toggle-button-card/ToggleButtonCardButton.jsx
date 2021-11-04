import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import {TOGGLE_BUTTONS_CARD_LABELS} from "../../../assets/Constants";

export const ToggleButtonsCardButton = ({eventKey}) =>
    (
        <div className={eventKey === 0 ? "offset-md-3 col-md-3 text-center mb-2" : "col-md-3"}>
            <Accordion.Toggle as={Button} className="outline-link " eventKey="0">{TOGGLE_BUTTONS_CARD_LABELS[eventKey]}</Accordion.Toggle>
        </div>
    )