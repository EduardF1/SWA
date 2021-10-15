import DataTable from "./components/DataTable";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadWeatherDataForCity} from "../redux/actions";
import {useHistory} from "react-router-dom";

const SearchResults = () => {
    const history = useHistory();
    const city = history.location.state._city;

    let dispatch = useDispatch();
    const {weatherDataForCity} = useSelector(state => state.weatherDataForCity);
    useEffect(() => {
        dispatch(loadWeatherDataForCity(city))
    }, []);
    return (
        <div>
            <h2>The weather data for {city} is:</h2>
            {weatherDataForCity !== undefined && <>
                <DataTable data={weatherDataForCity.slice(0, 200)}/>
            </>}
        </div>
    );
};

export default SearchResults;