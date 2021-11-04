import {setForecastData} from '../actions';
import {getDataFromInterval} from '../utility/DateIntervalFilter';
import {instance} from "../network/AxiosInstance";
import {NEW_LINE} from "../assets/Constants";

/**
 * Weather Forecast reducer, determines changes in state for the weather forecast data set.
 * @param state Initial state, empty array.
 * @param action Action to alter state ("mutations" of state).
 * @returns {*[]|*} Default state ([]) if no action is triggered or the RESET_FORECAST action is triggered,
 *                  action.payload when SET_FORECAST is triggered.
 */
export default function weatherForecastReducer (state = [], action) {
    switch(action.type){
        case 'SET_FORECAST':
            return action.payload;
        case 'RESET_FORECAST':
            return state = [];
        default:
            return state;
    } 
}

/**
 * Retrieve the data from the API and set it to the store.
 * @param {*} type is ending of the base URL from axios,
 *                 Ex.: base: 'http://localhost:8080/' + type: 'forecast'
 *                      base: 'http://localhost:8080/' + type: 'data'
 * @param {*} filter if filter is set - if not the Date Interval Filter (startDate & endDate) is null.
 * @param {*} startDate Date Interval Filter start date.
 * @param {*} endDate Date Interval Filter end date.
 */
export function retrieveForecastData(type, filter, startDate, endDate)
{
    return async function fetchWeatherData(dispatch){
        const data = await instance.get(type)
        .then(({data}) => data)
        .catch((err) =>{
            if(err.response || err.request) console.log(err.response.data + NEW_LINE + err.response.status);
        });
    if(data !== undefined) (!filter) ? dispatch(setForecastData(data)) : dispatch(setForecastData(getDataFromInterval(data,startDate,endDate)));
    }
}