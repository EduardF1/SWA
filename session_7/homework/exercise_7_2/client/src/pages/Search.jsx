import {Button, TextField} from "@material-ui/core";
import { useState} from "react";
import {useHistory} from "react-router-dom";

const Search = () => {
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    let history = useHistory();

    const handleInputChange = (event) => {
        let city = event.target.value;
        setCity(city);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!city) setError('Please select a city.');
    }
    return (
        <div>
            <h2>Search for the weather data of a specific city</h2>
            <p>Please choose either Aarhus, Copenhagen or Horsens.</p>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standard-basic" label="city" value={city} type="text" onChange={handleInputChange}/><br/>
                <Button style={{width: "200px", marginTop: "20px"}} variant="contained" color="primary" type="submit" onClick={() => history.push({pathname: '/results', state: {_city: city}})}>Search</Button>
            </form>
        </div>
    )
};

export default Search;


