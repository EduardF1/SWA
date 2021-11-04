import {setHistoricData} from '../actions';
import {instance} from "../network/AxiosInstance";
import {getDataFromInterval} from "../utility/DateIntervalFilter";
import {DATA_TYPES, NEW_LINE, REQUEST_ALERTS} from "../assets/Constants";

/**
 * Weather Forecast reducer, determines changes in state for the weather forecast data set.
 * @param state Initial state, empty array.
 * @param action Action to alter state ("mutations" of state).
 * @returns {*[]|*} Default state ([]) if no action is triggered or the RESET_DATA action is triggered,
 *                  action.payload when SET_DATA is triggered.
 */
export default function weatherDataReducer(state = [], action) {
    switch (action.type) {
        case 'SET_DATA':
            return action.payload;
        case 'RESET_DATA':
            return state = [];
        default:
            return state;
    }
}

/**
 * Retrieve historic weather data asynchronously from the REST server through the axis instance and calls the action of the specific reducer
 * @param type Bases are either forecast or data with optional city param,
 *             Ex.: base: 'http://localhost:8080/' + type: 'forecast'
 *                  base: 'http://localhost:8080/' + type: 'data'
 * @param filter Date Interval Filter used to filter the response weather data if set.
 * @param startDate Start date of the Date Interval Filter if set, otherwise null.
 * @param endDate End date of the Date Interval Filter if set, otherwise null.
 * @returns {(function(*): Promise<void>)|*}
 */
export function retrieveHistoricData(type, filter, startDate, endDate) {
    return async function fetchWeatherData(dispatch) {
        const data = await instance.get(type)
            .then(({data}) => data)
            .catch((err) => {
                if(err.response || err.request) console.log(err.response.data + NEW_LINE + err.response.status);
            });
        //check if data comes back from server and if it should be filtered after retrieving and reducer action is called
        if (data !== undefined) (!filter) ? dispatch(setHistoricData(data)) : dispatch(setHistoricData(getDataFromInterval(data, startDate, endDate)));
    }
}

/**
 * Post historic weather data asynchronously to the REST server through the axios instance to the server
 * @param requestType Either "data" or "forecast"
 * @param type The possible type of a measurement, one of ["temperature", "wind speed", "precipitation", "cloud coverage"].
 * @param value The measurement value, numeric value.
 * @param unit The measurement unit, one of ["mm", "m/s", "C", "%"].
 * @param time The date time of the measurement.
 * @param place The location of the measurement, one of ["Horsens", "Copenhagen", "Aarhus"]
 * @param extras Default value of "-", otherwise for the "precipitation" type, an array of strings and
 *               for the "wind speed" type, an array of strings.
 * @returns {(function(): Promise<void>)|*}
 */
export function postHistoricData(requestType, type, value, unit, time, place, extras) {
    //dispatch and getState parameters are necessary for thunk middleware
    return async function postWeatherData(dispatch, getState) {
        async function sendPostRequest(requestType, payload) {
            await instance.post(requestType, {...payload})
                .then(function (response) {
                    (response.status === 201) ? alert(REQUEST_ALERTS[0]) : alert(REQUEST_ALERTS[1]);
                })
                .catch(function (error) {
                    alert(error);
                });
        }
        switch (type) {
            case DATA_TYPES[0]:
            case DATA_TYPES[1]:
                await sendPostRequest(requestType, {value: parseInt(value), type: type, unit: unit, time: time, place: place});
                break;
            case DATA_TYPES[2]:
                await sendPostRequest(requestType, {value: parseInt(value), precipitation_type: extras, type: type, unit: unit, time: time, place: place});
                break;
            case DATA_TYPES[3]:
                await sendPostRequest(requestType, {value: parseInt(value), direction: extras, type: type, unit: unit, time: time, place: place})
                break;
            default:
                break;
        }
    }
}