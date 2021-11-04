import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";
import TableHeader from "../table-header/TableHeader";
import TableRow from "../table-row/TableRow";

function WeatherHistoryCard({historicData, selectedCity}) {
    return (
        <>
            <Card>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p className="text-center lead"> Showing Weather History For {selectedCity}</p>
                        <Table id="weatherHistory" responsive striped bordered hover>
                            <TableHeader label={"History"}/>
                            <tbody className="text-center">
                                {historicData.map((item, index) =>  <TableRow key={index} item={item} index={index} label={"History"}/>)}
                            </tbody>
                        </Table >
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </>
    )
}

export default WeatherHistoryCard;