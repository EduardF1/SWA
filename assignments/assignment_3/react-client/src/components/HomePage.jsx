import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import _ from "lodash";

import { retrieveAllData } from '../utility/StoreHandler'

import AccordionContainer from "./homepage/AccordionContainer";
import JumbotronContainer from "./homepage/JumbotronContainer";

function HomePage() {
    //react useState for checking buttons state
    const [selectedCity, setSelectedCity] = useState('Horsens');
    const [debounce, setDebounce] = useState(false);
    const [filterSet, setFilterSet] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    //data reducers
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

    const onSelectedCityChange = (city) => {
        if (!debounce) {
            setSelectedCity(city);
            retrieveAllData(city, filterSet, selectedStartDate, selectedEndDate);
        }
        setDebounce(!debounce)
    }
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