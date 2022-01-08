const {IN_TYPE, MM_TYPE} = require('../../../../Constants');

function Precipitation(unit, value, precipitationType) {
    this.unit = unit;
    this.value = value;
    this.precipitationType = precipitationType;
    Object.freeze(this);
}

Precipitation.prototype.setUnit = function (newUnit) {
    this.unit = newUnit;
};
Precipitation.prototype.setValue = function (newValue) {
    this.value = newValue;
};
Precipitation.prototype.setPrecipitationType = function (newPrecipitationType) {
    this.precipitationType = newPrecipitationType;
};
Precipitation.prototype.getUnit = function () {
    return this.unit
};
Precipitation.prototype.getValue = function () {
    return this.value
};
Precipitation.prototype.getPrecipitationType = function () {
    return this.precipitationType
};
Precipitation.prototype.convertToInches = function () {
    if (this.unit === MM_TYPE) {
        this.unit = IN_TYPE;
        this.value = this.value / 25.4;
    }
};
Precipitation.prototype.convertToMM = function () {
    if (this.unit === IN_TYPE) {
        this.unit = MM_TYPE;
        this.value = this.value * 25.4;
    }
};

module.exports = {Precipitation};