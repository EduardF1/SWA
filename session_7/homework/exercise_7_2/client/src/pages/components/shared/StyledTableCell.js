import {styled} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import tableCellClasses from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#5CD85A',
        color: '#5CD85A',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#5CD85A',
    },
    '&:nth-of-type(even)': {
        backgroundColor: '#DDFFE7',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));