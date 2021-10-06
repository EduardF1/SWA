import {WeatherLedger} from "./WeatherLedger.mjs";

export function WeatherForecast(data) {
    WeatherLedger.call(this, data);
}

Object.setPrototypeOf(WeatherForecast.prototype, WeatherLedger.prototype);

const dataSize = this.getData().length;
WeatherForecast.prototype = {
    getAverageMaxValue: function () {
        return this.getData().map(element => element.getMax()).reduce((previous, current) => previous + current) / dataSize;
    },
    getAverageMinValue: function () {
        return this.getData().map(element => element.getMin()).reduce((previous, current) => previous + current) / dataSize;
    }
}
