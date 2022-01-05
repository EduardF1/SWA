// 3rd Party
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
// Own
import {TableRow} from "../table-row/TableRow";
import {CARD_LABELS, IDENTIFIERS} from "../../assets/Constants";
import {TableHeader} from "../table-header/TableHeader";

/**
 * WeatherForecastCard component function, used to render the table for historic weather data of a city.
 * @param forecastData (Array of objects) Prop used for receiving the forecast data from which the table's rows are created.
 * @param selectedCity (String) Prop used for identifying the currently selected city, the initial (default) value is "Horsens".
 * @returns {JSX.Element} The WeatherForecastCard component.
 * @constructor
 */
export const WeatherForecastCard = ({forecastData, selectedCity}) =>
    (
        <>
            <Card>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p className="text-center lead"> {CARD_LABELS[1]} {selectedCity}</p>
                        <Table id="weatherForecast" responsive striped bordered hover>
                            <TableHeader label={IDENTIFIERS[1]}/>
                            <tbody className="text-center">
                                {/* Dynamic creation of the table rows */}
                                {forecastData.map((item, index) => <TableRow key={index} item={item} index={index} label={IDENTIFIERS[1]}/>)}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    );