import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import {App} from './App';
import {store} from './store'

import { retrieveHistoricData } from './reducers/weatherData'
import { retrieveForecastData } from './reducers/weatherForecast';

import {API_RESOURCES, CITIES, DEFAULT_FILTER_VALUES} from "./assets/Constants";

/**
 * Default requests (web app initialization)
 */
store.dispatch(retrieveHistoricData(`${API_RESOURCES[0]}/${CITIES[0]}`, ...DEFAULT_FILTER_VALUES));
store.dispatch(retrieveForecastData(`${API_RESOURCES[1]}/${CITIES[0]}`, ...DEFAULT_FILTER_VALUES));

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
