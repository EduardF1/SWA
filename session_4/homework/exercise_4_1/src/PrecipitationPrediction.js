const {IN_UNIT, MM_UNIT} = require('../../../../Constants');

function PrecipitationPrediction(unit, minValue, maxValue, expectedTypes) {
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.expectedTypes = [...expectedTypes];
    Object.freeze(this);
}
PrecipitationPrediction.prototype.setMinValue = function (newMinValue) {
    this.minValue = newMinValue;
};
PrecipitationPrediction.prototype.setMaxValue = function (newMaxValue) {
    this.maxValue = newMaxValue;
};
PrecipitationPrediction.prototype.setUnit = function (newUnit) {
    this.unit = newUnit;
};
PrecipitationPrediction.prototype.setExpectedTypes = function (newExpectedTypes) {
    this.expectedTypes = newExpectedTypes;
};
PrecipitationPrediction.prototype.getMinValue = function () {
    return this.minValue
};
PrecipitationPrediction.prototype.getMaxValue = function () {
    return this.maxValue
};
PrecipitationPrediction.prototype.getUnit = function () {
    return this.unit
};
PrecipitationPrediction.prototype.getExpectedTypes = function () {
    return this.expectedTypes
};
PrecipitationPrediction.prototype.matches = function (data) {
    return (this.unit === data.unit) &&
        (this.expectedTypes.includes(data.precipitationType)) &&
        (((this.minValue + this.maxValue) / 2) === data.value)
}
PrecipitationPrediction.prototype.convertToInches = function () {
    if (this.unit === MM_UNIT) {
        this.minValue = this.minValue / 25.4;
        this.maxValue = this.maxValue / 25.4;
        this.unit = IN_UNIT;
    }

}
PrecipitationPrediction.prototype.convertToMM =function ()  {
    if (this.unit === IN_UNIT) {
        this.minValue = this.minValue * 25.4;
        this.maxValue = this.maxValue * 25.4;
        this.unit = MM_UNIT;
    }
}

module.exports = {PrecipitationPrediction};