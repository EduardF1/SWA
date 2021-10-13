import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {MPH_TYPE, MPH_UNIT, MPS_TYPE, MPS_UNIT} from "../../../Constants.js";

function WindPrediction(time, place, type, unit, min, max, expectedDirections) {
    WeatherPrediction.call(this, time, place, type, unit, min, max);
    this.expectedDirections = expectedDirections;
}

Object.setPrototypeOf(WindPrediction.prototype, WeatherPrediction.prototype);

WindPrediction.prototype = {
    setExpectedTypes: function (newExpectedDirections) {
        this.expectedDirections = newExpectedDirections;
    },
    getExpectedTypes: function () {
        return this.expectedDirections;
    },
    convertToMPH: function () {
        if (this.getType() === MPS_TYPE) {
            this.setUnit(MPH_UNIT);
            this.setType(MPH_TYPE)
            this.setValue(this.getValue() * 2.237);
        }
    },
    convertToMS: function () {
        if (this.getType() === MPH_TYPE) {
            this.setUnit(MPS_UNIT);
            this.setType(MPS_TYPE);
            this.setValue(this.getValue() / 2.237);
        }
    }
}