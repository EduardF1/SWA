import {Box, TextField} from "@material-ui/core";
import {useState} from "react";

const Search = () => {
    const [state, setState] = useState([]);
    const {weatherData} = state;

    return (
        <div>
            <div>
                <h2>Search for a the weather report of a city.</h2>
                <p>Please choose one of the following, Aarhus, Copenhagen or Horsens.</p>
            </div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '58ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Filled" variant="filled" />
            </Box>
        </div>
    );
};

export default Search;