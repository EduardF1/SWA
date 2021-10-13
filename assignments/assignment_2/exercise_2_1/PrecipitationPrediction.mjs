import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {MM_TYPE, MM_UNIT, IN_TYPE, IN_UNIT} from "../../../Constants.js";

function PrecipitationPrediction(time, place, type, unit, min, max, expectedTypes) {
    WeatherPrediction.call(this, time, place, type, unit, min, max);
    this.expectedTypes = expectedTypes;
}

Object.setPrototypeOf(PrecipitationPrediction.prototype, WeatherPrediction.prototype);

PrecipitationPrediction.prototype = {
    setExpectedTypes: function (newExpectedTypes) {
        this.expectedTypes = newExpectedTypes;
    },
    getExpectedTypes: function () {
        return this.expectedTypes;
    },
    convertToInches: function () {
        if (this.getType() === IN_TYPE) {
            this.setType(MM_TYPE);
            this.setUnit(MM_UNIT);
            this.setValue(this.getValue() * 2.237);
        }
    },
    convertToMM: function () {
        if (this.getType() === MM_TYPE) {
            this.setType(IN_TYPE);
            this.setUnit(IN_UNIT);
            this.setValue(this.getValue() / 2.237);
        }
    }
}