import {WeatherPrediction} from "./WeatherPrediction.mjs";

function CloudCoveragePrediction(time, place, type, unit, min, max) {
    WeatherPrediction.call(this, time, place, type, unit, min, max);
}

Object.setPrototypeOf(CloudCoveragePrediction.prototype, WeatherPrediction.prototype);