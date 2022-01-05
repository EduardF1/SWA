// 3rd Party
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
// Own
import {TableRow} from "../table-row/TableRow";
import {CARD_LABELS, IDENTIFIERS} from "../../assets/Constants";
import {TableHeader} from "../table-header/TableHeader";

/**
 * WeatherHistoryCard component function, used to render the table for historic weather data of a city.
 * @param historicData (Array of objects) Prop used for receiving the historic data from which the table's rows are created.
 * @param selectedCity (String) Prop used for identifying the currently selected city, the initial (default) value is "Horsens".
 * @returns {JSX.Element} The WeatherHistoryCard component.
 * @constructor
 */
export const WeatherHistoryCard = ({historicData, selectedCity}) =>
    (
        <>
            <Card>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p className="text-center lead"> {CARD_LABELS[0]} {selectedCity}</p>
                        <Table id="weatherHistory" responsive striped bordered hover>
                            <TableHeader label={IDENTIFIERS[0]}/>
                            <tbody className="text-center">
                                {/* Dynamic creation of the table rows */}
                                {historicData.map((item, index) => <TableRow key={index} item={item} index={index} label={IDENTIFIERS[0]}/>)}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    );