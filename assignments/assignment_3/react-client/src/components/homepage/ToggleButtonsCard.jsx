import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ToggleButtonsCard() {
    return (
        <>
            <Card className="myCard pt-3 mt-0">
                <div className="row text-center mb-5">
                    <div className="offset-md-3 col-md-3 text-center mb-2">
                        <Accordion.Toggle as={Button} className="outline-link " eventKey="0">SEE WEATHER FORECAST</Accordion.Toggle>
                    </div>
                    <div className="col-md-3">
                        <Accordion.Toggle as={Button} className="outline-link" eventKey="1">SEE WEATHER HISTORY</Accordion.Toggle>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default ToggleButtonsCard;