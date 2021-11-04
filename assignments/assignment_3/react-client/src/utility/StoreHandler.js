import store from '../store'
import { retrieveHistoricData } from '../reducers/weatherData'
import { retrieveForecastData } from '../reducers/weatherForecast'


// Function to dispatch weather forecast & weather history, function called by eventListeners.
export const retrieveAllData = (type,filter,startDate,endDate) => {
    store.dispatch(retrieveHistoricData("data/" + type, filter, startDate, endDate));
    store.dispatch(retrieveForecastData("forecast/" + type, filter, startDate, endDate));
}