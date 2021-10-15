import * as actionTypes from './actionType';
import axios from "axios";
import {weatherDataUrl} from "../network/config";

// actions
const getWeatherData = (weatherData) => ({
    type: actionTypes.GET_WEATHER_DATA,
    payload: weatherData
});

const getWeatherDataForCity = (weatherDataForCity) => ({
    type: actionTypes.GET_WEATHER_DATA_FOR_CITY,
    payload: weatherDataForCity
});

// dispatchers
export const loadWeatherData = () => {
    return function (dispatch) {
        axios.get(`${weatherDataUrl}`).then(response => {
            console.log("response",response.data);
            dispatch(getWeatherData(response.data));
        }).catch(error => console.error(error));
    };
};

export const loadWeatherDataForCity = (place) => {
    return function (dispatch) {
        axios.get(`${weatherDataUrl}/${place}`).then(response => {
            console.log("response",response.data);
            dispatch(getWeatherData(response.data));
        }).catch(error => console.error(error));
    };
}