import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from "lodash";

import { retrieveAllData } from '../utility/StoreHandler'

import AccordionContainer from "./homepage/AccordionContainer";
import JumbotronContainer from "./homepage/JumbotronContainer";
import {CITIES} from "../assets/Constants";

function HomePage() {
    // Button state management hooks
    const [debounce, setDebounce] = useState(false);
    const [selectedCity, setSelectedCity] = useState(CITIES[0]);
    const [filterSet, setFilterSet] = useState(false);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedStartDate, setSelectedStartDate] = useState(null);

    // Data reducers
    const historicData = useSelector(state => state.historicData);
    const forecastData = useSelector(state => state.forecastData);

    /**
     * Function is called from the Filter Component(callback function)
     * @param {boolean} filterValue if filter is applied
     * @param {date} startDate start date if filter is applied else null
     * @param {date} endDate end date if filter is applied else null
     */
    const handleDateIntervalCallback = (filterValue, startDate, endDate) => {
        setFilterSet(filterValue);
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
    }

    /**
     * Callback function to handle the change in the selection of a city.
     * @param city String value of the city which has been changed to.
     */
    const onSelectedCityChange = (city) => {
        if (!debounce) {
            setSelectedCity(city);
            retrieveAllData(city, filterSet, selectedStartDate, selectedEndDate);
        }
        setDebounce(!debounce)
    }

    /**
     * Sets the background style class depending on the current city.
     * @param selectedCity Current selected city.
     * @returns {`background-style-${string}`} The background css class depending on the selected city.
     */
    const getSelectedCityBackground = (selectedCity) => `background-style-${_.lowerFirst(selectedCity)}`;

    return (
        <div >
            <JumbotronContainer
                getSelectedCityBackground={getSelectedCityBackground}
                selectedCity={selectedCity}
                onSelectedCityChange={onSelectedCityChange}
                handleDateIntervalCallback={handleDateIntervalCallback}
            />
            <AccordionContainer
                forecastData={forecastData}
                historicData={historicData}
                selectedCity={selectedCity}
            />
        </div>
    )
}
export default HomePage;