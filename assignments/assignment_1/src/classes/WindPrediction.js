const {WeatherPrediction} = require('./WeatherPrediction');
const {MPH_UNIT, MPH_TYPE, MPS_UNIT, MPS_TYPE} = require("../../../../Constants");

/**
 * WindPrediction class, subclass of WeatherPrediction.
 * Has as attributes/properties "time", "place", "value", "type", "expectedDirections" and "unit".
 * Has getters and setters for all attributes.
 * Has a method, "match()" used to assert if the type and value of a WeatherData object are the same as that of a WindPrediction object.
 * Has two methods, "convertToMPH()" and "convertToMPS()" which convert the metrics' information from International to US and vice-versa.
 */
class WindPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, expectedDirections) {
        super(time, place, value, type, unit)
        this.expectedDirections = expectedDirections;
    }

    getExpectedDirections = () => this.expectedDirections;
    setExpectedDirections = (newExpectedDirections) => this.expectedDirections = newExpectedDirections;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;
    convertToMPH = () => {
        if (this.getDataType().getUnit() === MPH_UNIT) {
            this.setValue(this.getValue() * 2.237);
            this.getDataType().setUnit(MPS_UNIT);
            this.getDataType().setType(MPS_TYPE);
        }
    };
    convertToMPS = () => {
        if (this.getDataType().getUnit() === MPS_UNIT) {
            this.setValue(this.getValue() / 2.237);
            this.getDataType().setUnit(MPH_UNIT);
            this.getDataType().setType(MPH_TYPE);
        }
    };
}

module.exports = {
    WindPrediction
}