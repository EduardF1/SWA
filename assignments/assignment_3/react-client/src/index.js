import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import store from './store'
import { Provider } from 'react-redux'
import { retrieveHistoricData } from './reducers/weatherData'
import { retrieveForecastData } from './reducers/weatherForecast';

/**
 * Getting default data from the server 
 */
store.dispatch(retrieveHistoricData("data/Horsens", false, null, null));
store.dispatch(retrieveForecastData("forecast/Horsens", false, null, null));

ReactDOM.render(
  //added provider for react-redux
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
