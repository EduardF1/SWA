import * as actionTypes from './actionType';
import axios from "axios";
import {weatherDataUrl} from "../network/config";

// action
const getWeatherData = (weatherData) => ({
    type: actionTypes.GET_WEATHER_DATA,
    payload: weatherData
});

// dispatcher
export const loadWeatherData = () => {
    return function (dispatch) {
        axios.get(`${weatherDataUrl}`).then(response => {
            console.log("response",response.data);
            dispatch(getWeatherData(response.data));
        }).catch(error => console.error(error));
    };
};