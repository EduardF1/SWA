// 3rd Party
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
// Own
import {TOGGLE_BUTTONS_CARD_LABELS} from "../../../assets/Constants";

/**
 * ToggleButtonsCardButton component function.
 * @param eventKey (number) Prop used to conditionally determine which button was clicked (toggled).
 * @returns {JSX.Element} The ToggleButtonsCardButton component.
 * @constructor
 */
export const ToggleButtonsCardButton = ({eventKey}) =>
    (
        <div className={eventKey === 0 ? "offset-md-3 col-md-3 text-center mb-2" : "col-md-3"}>
            <Accordion.Toggle as={Button} className="outline-link " eventKey={eventKey.toString()}>{TOGGLE_BUTTONS_CARD_LABELS[eventKey]}</Accordion.Toggle>
        </div>
    );