import weatherDataReducer from './weatherData';
import weatherForecastReducer from './weatherForecast';
import {combineReducers} from 'redux';

/**
 * Merge all reducers
 */
const combinedReducers = combineReducers({
    historicData: weatherDataReducer,
    forecastData: weatherForecastReducer
});

export default combinedReducers;