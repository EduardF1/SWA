import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import DataTableHeader from "./DataTableHeader";
import {StyledTableCell, StyledTableRow} from "./shared/StyledTableCell";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import GoBackButton from "./shared/GoBackButton";
import {GetCurrentRelativePath} from "./shared/GetCurrentRelativePath";


const DataTable = ({data, city}) => {


    return (
        <div>
            <h2>The weather data {(city === undefined || city === '') ? '' : `for ${city}`} is:</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 900, marginTop: 100}} aria-label="customized table">
                    <DataTableHeader/>
                    <TableBody>
                        {( GetCurrentRelativePath(window.location.href) === 'result') ? (<GoBackButton/>): ''}
                        {data && data.map((weatherItem, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {weatherItem.value}
                                </StyledTableCell>
                                <StyledTableCell align="center">{weatherItem.type}</StyledTableCell>
                                <StyledTableCell align="center">{weatherItem.unit}</StyledTableCell>
                                <StyledTableCell align="center">{weatherItem.time}</StyledTableCell>
                                <StyledTableCell align="center">{weatherItem.place}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;