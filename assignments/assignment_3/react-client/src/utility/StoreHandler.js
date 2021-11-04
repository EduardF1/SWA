import {store} from '../store'

import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'

import {API_RESOURCES} from "../assets/Constants";

/**
 * Function to dispatch weather forecast & weather history, function called by eventListeners.
 * @param city API main endpoint type, either "forecast" or "data" followed by the city for which the data is
 *             requested.
 * @param filter Response filter, null or date interval.
 * @param startDate Start date parameter of the the date interval filter.
 * @param endDate End date parameter of the date interval filter.
 */
export const retrieveAllData = (city,filter,startDate,endDate) => {
    const parameters = [city, filter, startDate, endDate];
    store.dispatch(retrieveHistoricData(`${API_RESOURCES[0]}/` + parameters[0], ...parameters.slice(1, parameters.length)));
    store.dispatch(retrieveForecastData(`${API_RESOURCES[1]}/` + parameters[0], ...parameters.slice(1, parameters.length)));
}