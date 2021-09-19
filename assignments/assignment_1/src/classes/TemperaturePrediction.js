const {WeatherPrediction} = require('./WeatherPrediction');

class TemperaturePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
    }

    convertToF = () => {
        if (this.getDataType().getUnit() === '*C') {
            this.setValue((this.getValue() * 9 / 5) + 32);
            this.getDataType().setUnit('*F');
            this.setType('Fahrenheit');
        }
    }
    convertToC = () => {
        if (this.getDataType().getUnit() === '*F') {
            this.setValue((this.getValue() - 32) * (5 / 9));
            this.getDataType().setUnit('*C');
            this.setType('Celsius');
        }
    }
}

module.exports = {
    TemperaturePrediction
}