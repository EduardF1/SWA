import {EventDataType} from "./EventDataType.mjs";

export function WeatherPrediction(time, place, type, unit, min, max) {
    EventDataType.call(this, time, place, type, unit);
    this.min = min;
    this.max = max;
}

Object.setPrototypeOf(WeatherPrediction.prototype, WeatherPrediction.prototype);

WeatherPrediction.prototype = {
    setMin: function (newMin) {
        this.min = newMin;
    },
    getMin: function () {
        return this.min;
    },
    setMax: function (newMax) {
        this.max = newMax;
    },
    getMax: function () {
        return this.max;
    },
    matches: function (data) {
        return data.getTime() === this.getTime() &&
            data.getPlace() === this.getPlace() &&
            data.getType() === this.getType() &&
            data.getUnit() === this.getUnit() &&
            (data.getValue() >= this.getMin() && data.getValue() <= this.getMax())
    }
}
