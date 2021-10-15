import {styled} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import tableCellClasses from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {loadWeatherData} from "../redux/actions";

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Home = () => {
    let dispatch = useDispatch();
    const {weatherData} = useSelector(state => state.weatherData);
    useEffect(() => {
        dispatch(loadWeatherData())
    }, []);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 900, marginTop: 100}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell><strong>Weather Data</strong></StyledTableCell>
                            <StyledTableCell align="center">Value</StyledTableCell>
                            <StyledTableCell align="center">Precipitation Type&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Unit&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Time&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Place&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {weatherData.slice(0, 10) && weatherData.slice(0, 10).map((weatherItem, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center">{}</StyledTableCell>
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

export default Home;