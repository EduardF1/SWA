import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {StyledTableCell} from "./shared/StyledTableCell";

const DataTableHeader = () => {
    return (
        <>
            <TableHead style={{backgroundColor:'#A5CFE3'}}>
                <TableRow>
                    <StyledTableCell align="center">Value</StyledTableCell>
                    <StyledTableCell align="center">Precipitation Type&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Unit&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Time&nbsp;</StyledTableCell>
                    <StyledTableCell align="center">Place&nbsp;</StyledTableCell>
                </TableRow>
            </TableHead>
        </>
    );
};

export default DataTableHeader;