import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import TableHeader from "../table-header/TableHeader";
import TableRow from "../table-row/TableRow";

function WeatherForecastCard({forecastData, selectedCity}) {
    return (
        <>
            <Card>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p className="text-center lead"> Weather Forecast For {selectedCity}</p>
                        <Table id="weatherForecast" responsive striped bordered hover >
                            <TableHeader label={"Forecast"}/>
                            <tbody className="text-center">
                                {forecastData.map((item, index) => {
                                    return <TableRow item={item} index={index} label={"Forecast"}/>
                                })}
                            </tbody>
                        </Table></Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default WeatherForecastCard;