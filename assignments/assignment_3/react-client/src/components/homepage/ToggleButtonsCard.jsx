import Card from "react-bootstrap/Card";
import {ToggleButtonsCardButton} from "./toggle-button-card/ToggleButtonCardButton";

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
    )