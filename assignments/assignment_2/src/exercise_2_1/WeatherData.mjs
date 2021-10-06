import {EventDataType} from './EventDataType.mjs';

export function WeatherData(time, place, type, unit, value) {
    EventDataType.call(this,time, place, type, unit);
    this.value = value;
}

Object.setPrototypeOf(WeatherData.prototype, EventDataType.prototype);

WeatherData.prototype = {
    setValue: function (newValue) {
        this.value = newValue;
    },
    getValue: function () {
        return this.value;
    }
}

