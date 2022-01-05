// 3rd Party
import Card from "react-bootstrap/Card";
// Own
import {ToggleButtonsCardButton} from "./toggle-button-card/ToggleButtonCardButton";

/**
 * ToggleButtonsCard component function. Wrapper for the two toggle buttons "SEE WEATHER FORECAST" and "SEE WEATHER HISTORY".
 * The differentiation of the two buttons is done through the check of the "eventKey" property value.
 * @returns {JSX.Element}
 * @constructor The ToggleButtonsCard component.
 */
export const ToggleButtonsCard = () =>
    (
        <>
            <Card className="myCard pt-3 mt-0">
                <div className="row text-center mb-5">
                    <ToggleButtonsCardButton eventKey={0}/>
                    <ToggleButtonsCardButton eventKey={1}/>
                </div>
            </Card>
        </>
    );