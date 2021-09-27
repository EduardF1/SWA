const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");
const {DateInterval} = require('./DateInterval');

const WeatherForecast = ([...data], placeFilter, typeFilter, periodFilter) => {
    let state = {data: data, placeFilter: placeFilter, typeFilter: typeFilter, periodFilter: periodFilter};
    const setPlaceFilter = (place) => state.placeFilter = place;
    const clearPlaceFilter = () => state.placeFilter = '';
    const getPlaceFilter = () => state.placeFilter;
    const setTypeFilter = (type) => state.typeFilter = type;
    const clearTypeFilter = () => state.typeFilter = '';
    const getTypeFilter = () => state.typeFilter;
    const setPeriodFilter = (period) => state.periodFilter = period;
    const getPeriodFilter = () => state.periodFilter;
    const clearPeriodFilter = () => state.periodFilter = '';
    const convertToUsUnits = () => {
        state.data.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN_UNIT);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH_UNIT)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const convertToInternationalUnits = () => {
        state.data.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM_UNIT);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS_UNIT)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const add = (data) => state.data.push(data);
    const getData = () => state.data;
    const getSize = () => state.data.length;
    const getFilteredPredictions = () => {
        let filteredData = []
        state.data.forEach((element, index) => {
            console.log(
                `${index + 1}. In ${element.getPlace()} having the type ${element.getType()} is measured` +
                `in ${element.getUnit()} units and has the value ${element.getValue()} between ${periodFilter.getFrom()} and ${periodFilter.getTo()}`
            );
            if (
                (placeFilter === element.getPlace() || placeFilter === "") &&
                (typeFilter === element.getType() || typeFilter === "") &&
                (periodFilter === "" || periodFilter.contains(element.getTime()))
            ) {
                filteredData.push(element)
            }
        });
        return filteredData;
    };
    return Object.assign({}, ...state.data, DateInterval(state.periodFilter.dateFrom, state.periodFilter.dateTo), {
        getPlaceFilter, setPlaceFilter, clearPlaceFilter,
        getTypeFilter, setTypeFilter, clearTypeFilter,
        getPeriodFilter, setPeriodFilter, clearPeriodFilter,
        convertToUsUnits, convertToInternationalUnits, add,
        getSize, getData, getFilteredPredictions
    });
}

module.exports = {
    WeatherForecast
}