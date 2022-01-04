const {WeatherData} = require('./WeatherData');
const {IN, IN_TYPE, MM, MM_TYPE} = require('../../../../Constants');

/**
 * Precipitation class, inherits from WeatherData (subclass of it).
 * Has as attributes/properties "time", "place", "value", "type", "unit" and "precipitationType".
 * Has getters and setters for all the attributes and two conversion methods, "convertToInches()" and
 * "convertToMM()" which changes the metric information "type", "value" and "unit" (from US to International or vice-versa).
 */
class Precipitation extends WeatherData {
    constructor(time, place, value, type, unit, precipitationType) {
        super(time, place, value, type, unit)
        this.precipitationType = precipitationType
    }

    getPrecipitationType = () => this.precipitationType;
    setPrecipitationType = (precipitationType_) => this.precipitationType = precipitationType_;

    convertToInches = () => {
        super.setValue(super.getValue() / 25.4);
        super.setType(IN_TYPE);
        super.setUnit(IN);
    }
    convertToMM = () => {
        super.setValue(super.getValue() * 25.4);
        super.setType(MM_TYPE);
        super.setUnit(MM);
    }
}

module.exports = {
    Precipitation
}