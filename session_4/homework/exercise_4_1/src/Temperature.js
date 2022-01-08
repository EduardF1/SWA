const {CELSIUS_UNIT, FAHRENHEIT_UNIT} = require('../../../../Constants');

function Temperature (unit, value)  {
    this.unit = unit;
    this.value = value;
    Object.freeze(this);
}

Temperature.prototype.setUnit = function (newUnit) { this.unit = newUnit};
Temperature.prototype.setValue = function (newValue) {this.value = newValue};
Temperature.prototype.getUnit = function () { return this.unit};
Temperature.prototype.getValue = function () {return this.value};
Temperature.prototype.convertToC = function () {
    if (this.unit === CELSIUS_UNIT) {
        this.unit = FAHRENHEIT_UNIT;
        this.value = (this.value * 9 / 5) + 32;
    }
};
Temperature.prototype.convertToF = function () {
    if (this.unit === FAHRENHEIT_UNIT) {
        this.unit = CELSIUS_UNIT;
        this.value = (this.value - 32) * 5 / 9;
    }
};

module.exports = {Temperature};