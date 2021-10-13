import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} from "../../../Constants.js";

function TemperaturePrediction(time, place, type, unit, min, max) {
    WeatherPrediction.call(this, time, place, type, unit, min, max);
}

Object.setPrototypeOf(TemperaturePrediction.prototype, WeatherPrediction.prototype);

TemperaturePrediction.prototype = {
    convertToF: function () {
        if (this.getType() === CELSIUS_TYPE) {
            this.setType(FAHRENHEIT_TYPE);
            this.setUnit(FAHRENHEIT_UNIT);
            this.setValue((this.getValue() * 1.8) + 32)
        }
    },
    convertToC: function () {
        if (this.getType() === FAHRENHEIT_TYPE) {
            this.setType(CELSIUS_TYPE);
            this.setUnit(CELSIUS_UNIT);
            this.setValue((this.getValue() - 32) / 1.8)
        }
    }
}