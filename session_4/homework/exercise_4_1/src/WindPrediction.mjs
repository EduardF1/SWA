const {MPH_UNIT, MPS_UNIT} = require('Constants.js');
const Wind = require("./Wind.mjs");

const WindPrediction = (unit, minValue, maxValue, expectedDirections) => {
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.expectedDirections = expectedDirections;
}
WindPrediction.prototype.getMinValue = () => this.minValue;
WindPrediction.prototype.getMaxValue = () => this.maxValue;
WindPrediction.prototype.getUnit = () => this.unit;
WindPrediction.prototype.getExpectedDirection = () => this.expectedTypes;
WindPrediction.prototype.matches = (data) =>
    (this.unit === data.getUnit()) &&
    (((this.minValue + this.maxValue)/2) === data.getValue()) &&
    (this.expectedDirections.includes(data.getDirection()));
WindPrediction.prototype.convertToMPH = () => {
    if (this.unit === MPH_UNIT) {
        this.unit = MPS_UNIT;
        this.value = this.value * 2.24;
    }
};
WindPrediction.prototype.convertToMPS = () => {
    if (this.unit === MPS_UNIT) {
        this.unit = MPH_UNIT;
        this.value = this.value * 0.45;
    }
};

Object.freeze(WindPrediction);

export default WindPrediction;