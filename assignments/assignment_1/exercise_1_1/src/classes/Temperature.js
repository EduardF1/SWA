const {WeatherData} = require('../classes/WeatherData');

class Temperature extends WeatherData {
    constructor(place, time, type, unit, value) {
        super(place, time, type, unit, value);
    }

    convertToF = () => {
        this.setValue(this.getValue() * (9 / 5) + 32);
        this.setDataType(new DataType('Fahrenheit', '°F'));
    }

    convertToC = () => {
        this.setValue((this.getValue() - 32) * (5 / 9));
        this.setDataType(new DataType('Celsius', '°C'));
    }
}

module.exports = {
    WeatherData
}