import {WeatherData} from "./WeatherData.mjs";

export function CloudCoverage(time, place, type, unit, value) {
    WeatherData.call(this, time, place, type, unit, value);
}

Object.setPrototypeOf(CloudCoverage.prototype, WeatherData.prototype);

