const {WeatherPrediction} = require('./WeatherPrediction');
const {MM_UNIT, IN_UNIT, IN_TYPE, MM_TYPE} = require('../../../../Constants');

/**
 * PrecipitationPrediction class, subclass of WeatherPrediction.
 * Has as attributes/properties "time", "place", "value", "type", "unit" and "precipitationTypes".
 * Has getters and setters for all attributes.
 * Has a method, "matches()" used to assert whether or not a PrecipitationPrediction object has the same type and value as a
 * WeatherData object.
 * Has two methods, "convertToInches()" and "convertToMM()" which change the metric information from International to US and vice-versa.
 */
class PrecipitationPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, precipitationTypes) {
        super(time, place, value, type, unit)
        this.precipitationTypes = precipitationTypes
    }

    getExpectedTypes = () => this.precipitationTypes;
    setExpectedTypes = (newExpectedTypes) => this.precipitationTypes = newExpectedTypes;
    setPrecipitationTypes = (newPrecipitationTypes) => this.precipitationTypes = newPrecipitationTypes;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    convertToInches = () => {
        if (this.getDataType().getUnit() === MM_UNIT) {
            this.setValue(this.getValue() / 25.4);
            this.setUnit(IN_UNIT);
            this.setType(IN_TYPE);
        }
    }
    convertToMM = () => {
        if (this.getDataType().getUnit() === IN_TYPE) {
            this.setValue(super.getValue() * 25.4);
            this.setUnit(MM_UNIT);
            this.setType(MM_TYPE);
        }
    }
}

module.exports = {
    PrecipitationPrediction
}