import weatherDataReducer from './weatherDataReducer';
import weatherForecastReducer from './weatherForecastReducer';
import {combineReducers} from 'redux';

/**
 * Merge all reducers
 */
const combinedReducers = combineReducers({
    historicData: weatherDataReducer,
    forecastData: weatherForecastReducer
});

export default combinedReducers;