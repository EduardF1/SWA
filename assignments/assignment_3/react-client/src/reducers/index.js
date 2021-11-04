import weatherDataReducer from './weatherData';
import weatherForecastReducer from './weatherForecast';
import {combineReducers} from 'redux';

/**
 * Root reducer, merges all the individual application reducers.
 */
export const combinedReducers = combineReducers({
    historicData: weatherDataReducer,
    forecastData: weatherForecastReducer
});

export default combinedReducers;