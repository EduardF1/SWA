const {CELSIUS_UNIT, FAHRENHEIT_UNIT} = require('Constants.js');

const Temperature = (unit, value) => {
    this.unit = unit;
    this.value = value;
}

Temperature.prototype.getUnit = () => this.unit;
Temperature.prototype.getValue = () => this.value;
Temperature.prototype.convertToC = () => {
    if (this.unit === CELSIUS_UNIT) {
        this.unit = FAHRENHEIT_UNIT;
        this.value = (this.value * 9 / 5) + 32;
    }
};
Temperature.prototype.convertToF = () => {
    if (this.unit === FAHRENHEIT_UNIT) {
        this.unit = CELSIUS_UNIT;
        this.value = (this.value - 32) * 5 / 9;
    }
};
Object.freeze(Temperature);

export default Temperature;
