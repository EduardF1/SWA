import {WeatherData} from "./WeatherData.mjs";

export function Precipitation(time, place, type, unit, value, precipitationType) {
    WeatherData.call(this, time, place, type, unit, value);
    this.precipitationType = precipitationType;
}

Object.setPrototypeOf(Precipitation.prototype, WeatherData.prototype);

Precipitation.prototype = {
    getPrecipitationType: function () {
        return this.precipitationType;
    },
    setPrecipitationType: function (newPrecipitationType) {
        this.precipitationType = newPrecipitationType;
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