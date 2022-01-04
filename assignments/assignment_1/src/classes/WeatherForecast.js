const {
    CELSIUS_TYPE,
    CELSIUS_UNIT,
    EMPTY_STRING,
    FAHRENHEIT_TYPE,
    FAHRENHEIT_UNIT
} = require("../../../../Constants");

/**
 * Weather forecast class.
 * Receives an array of objects "data" of type WeatherPrediction.
 * Has as attributes/properties "data", "placeFilter", "typeFilter" and "periodFilter".
 * Has getters and setters for all the attributes.
 * Has reset methods, "clearPlaceFilter", "clearTypeFilter" and "clearPeriodFilter" which reset the values
 * of the filter attributes.
 * Has conversion methods that convert the metrics' information from US to International or vice-versa.
 * Has a method for adding data to the "data" attribute.
 * Has a method for reading all the data in the "data" attribute.
 * Has a method for getting the size of the "data" attribute.
 * Has a method for returning filtered predictions (from the "data" attribute with the set filters).
 */
class WeatherForecast {
    constructor([...data], placeFilter, typeFilter, periodFilter) {
        this.data = data;
        this.placeFilter = placeFilter;
        this.typeFilter = typeFilter;
        this.periodFilter = periodFilter;
    }

    setPlaceFilter = (place) => this.placeFilter = place;
    clearPlaceFilter = () => this.placeFilter = EMPTY_STRING;
    getPlaceFilter = () => this.placeFilter;
    setTypeFilter = (type) => this.typeFilter = type;
    clearTypeFilter = () => this.typeFilter = EMPTY_STRING;
    getTypeFilter = () => this.typeFilter;
    setPeriodFilter = (period) => this.periodFilter = period;
    getPeriodFilter = () => this.periodFilter;
    clearPeriodFilter = () => this.periodFilter = EMPTY_STRING;
    convertToUsUnits = () => {
        this.data.forEach((element => {
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
                    element.setUnit(MPH_UNIT);
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237);
                    break;
                default:
                    break;
            }
        }));
    };
    convertToInternationalUnits = () => {
        this.data.forEach((element => {
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
                    element.setUnit(MPS_UNIT);
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237);
                    break;
                default:
                    break;
            }
        }));
    };
    add = (data) => this.data.push(data);
    getData = () => this.data;
    getSize = () => this.data.length;
    getFilteredPredictions = () => {
        let filteredData = [];
        this.data.forEach((element, index) => {
            console.log(
                `${index + 1}. In ${element.getPlace()} having the type ${element.getType()} is measured` +
                `in ${element.getUnit()} units and has the value ${element.getValue()} between ${this.periodFilter.getFrom()} and ${this.periodFilter.getTo()}`
            );
            if (
                // Filter check
                (this.typeFilter === element.getType() || this.typeFilter === EMPTY_STRING) &&
                (this.placeFilter === element.getPlace() || this.placeFilter === EMPTY_STRING) &&
                (this.periodFilter.contains(element.getTime() || this.periodFilter === EMPTY_STRING))
            ) {
                filteredData.push(element)
            }
        });
        return filteredData;
    };
}

module.exports = {
    WeatherForecast
}