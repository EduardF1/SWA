const {MPH_UNIT, MPS_UNIT} = require('../../../../Constants');

function WindPrediction(unit, minValue, maxValue, expectedDirections) {
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.expectedDirections = expectedDirections;
    Object.freeze(this);
}

WindPrediction.prototype.setMinValue = function (newMinValue) {
    this.minValue = newMinValue;
};
WindPrediction.prototype.setMaxValue = function (newMaxValue) {
    this.maxValue = newMaxValue;
};
WindPrediction.prototype.setUnit = function (newUnit) {
    this.unit = newUnit;
};
WindPrediction.prototype.setExpectedDirections = function (newExpectedDirections) {
    this.expectedDirections = newExpectedDirections;
};
WindPrediction.prototype.getMinValue = function () {
    return this.minValue
};
WindPrediction.prototype.getMaxValue = function () {
    return this.maxValue
};
WindPrediction.prototype.getUnit = function () {
    return this.unit
};
WindPrediction.prototype.getExpectedDirections = function () {
    return this.expectedDirections
};
WindPrediction.prototype.matches = (data) =>
    (this.unit === data.getUnit()) &&
    (((this.minValue + this.maxValue) / 2) === data.getValue()) &&
    (this.expectedDirections.includes(data.getDirection()));
WindPrediction.prototype.convertToMPH = function () {
    if (this.unit === MPH_UNIT) {
        this.unit = MPS_UNIT;
        this.value = this.value * 2.24;
    }
};
WindPrediction.prototype.convertToMPS = function () {
    if (this.unit === MPS_UNIT) {
        this.unit = MPH_UNIT;
        this.value = this.value * 0.45;
    }
};

module.exports = {WindPrediction};