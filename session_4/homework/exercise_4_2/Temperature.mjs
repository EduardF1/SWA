const {WeatherData} = require('./WeatherData.mjs');
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE} = require('/Constants');

class Temperature extends WeatherData {
    constructor(place, time, type, unit, value) {
        super(place, time, type, unit, value);
        Object.freeze(this);
    }

    convertToF = () => {
        this.setValue(this.getValue() * (9 / 5) + 32);
        this.setDataType(new DataType(FAHRENHEIT_TYPE, FAHRENHEIT_UNIT));
    }

    convertToC = () => {
        this.setValue((this.getValue() - 32) * (5 / 9));
        this.setDataType(new DataType(CELSIUS_TYPE, CELSIUS_UNIT));
    }
}

export default Temperature;