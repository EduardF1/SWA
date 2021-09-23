const {WeatherPrediction} = require('WeatherPrediction.mjs');

class TemperaturePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
        Object.freeze(this);
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

export default TemperaturePrediction;