import {setForecastData} from '../actions';
import {getDataFromInterval} from '../utility/DateIntervalFilter';
import {instance} from "../network/AxiosInstance";

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
 * Retrieve the data from the API and set it to the store - described more in weatherData
 * @param {*} type is ending of the base URL from axios, eg. base: 'http://localhost:8080/' type: 'forecast'
 * @param {*} filter if filter is set - if not startDate & endDate === null
 * @param {*} startDate filter start date
 * @param {*} endDate filter end date
 */
export function retrieveForecastData(type, filter, startDate, endDate)
{
    return async function fetchWeatherData(dispatch){
        const data = await instance.get(type)
        .then(({data}) => data)
        .catch((err) =>{
            if(err.response || err.request) console.log(err.response.data + '\n' + err.response.status);
        });
    if(data !== undefined) (!filter) ? dispatch(setForecastData(data)) : dispatch(setForecastData(getDataFromInterval(data,startDate,endDate)));
    }
}