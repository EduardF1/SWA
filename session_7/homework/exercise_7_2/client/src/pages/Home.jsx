import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {loadWeatherData} from "../redux/actions";
import DataTable from "./components/DataTable";

const Home = () => {
    let dispatch = useDispatch();
    const {weatherData} = useSelector(state => state.weatherData);
    useEffect(() => {
        dispatch(loadWeatherData())
    }, []);
    return (
        <>
            <DataTable data={weatherData.slice(0, 200)}/>
        </>
    );
};

export default Home;