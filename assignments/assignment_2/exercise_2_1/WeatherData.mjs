import {EventDataType} from './EventDataType.mjs';

export function WeatherData(time, place, type, unit, value) {
    EventDataType.call(this,time, place, type, unit);
    this.value = value;
}


WeatherData.prototype = {
    setValue: function (newValue) {
        this.value = newValue;
    },
    getValue: function () {
        return this.value;
    }
}
Object.setPrototypeOf(WeatherData.prototype, EventDataType.prototype);

const weatherData1 = new WeatherData(new Date('1999-10-10'), 'Bergamo', 'MM', 'C', 100);
console.log(weatherData1.getPlace());
