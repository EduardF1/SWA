import weatherDataReducer from './weatherData';
import weatherForecastReducer from './weatherForecast';
import {combineReducers} from 'redux';

/**
 * this class is merging all reducers into one reducer
 */
const combinedReducers = combineReducers({
    historicData: weatherDataReducer,
    forecastData: weatherForecastReducer
});

export default combinedReducers;