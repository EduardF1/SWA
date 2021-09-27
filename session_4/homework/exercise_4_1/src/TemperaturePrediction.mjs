const {CELSIUS_UNIT, FAHRENHEIT_UNIT} = require('Constants.js');

const TemperaturePrediction = (unit, minValue, maxValue) => {
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
}
TemperaturePrediction.prototype.getUnit = () => this.unit;
TemperaturePrediction.prototype.getMinValue = () => this.minValue;
TemperaturePrediction.prototype.getMaxValue = () => this.maxValue;
TemperaturePrediction.prototype.matches = (temp) =>
    (((this.minValue + this.maxValue) / 2) === temp.getValue()) &&
    (this.unit === temp.getUnit());
TemperaturePrediction.prototype.convertToC = () => {
    if (this.unit === CELSIUS_UNIT) {
        this.unit = FAHRENHEIT_UNIT;
        this.value = (this.value * 9 / 5) + 32;
    }
};
TemperaturePrediction.prototype.convertToF = () => {
    if (this.unit === FAHRENHEIT_UNIT) {
        this.unit = CELSIUS_UNIT;
        this.value = (this.value - 32) * 5 / 9;
    }
};

Object.freeze(TemperaturePrediction);

export default TemperaturePrediction;