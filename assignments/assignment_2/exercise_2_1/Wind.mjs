import {WeatherData} from "./WeatherData.mjs";
const {MPS_TYPE, MPS_UNIT, MPH_TYPE, MPH_UNIT} = require('../../../Constants.js');

export function Wind(time, place, type, unit, value, direction) {
    WeatherData.call(this, time, place, type, unit, value);
    this.direction = direction;
}

Object.setPrototypeOf(Wind.prototype, WeatherData.prototype);

Wind.prototype = {
    setDirection: function (newDirection) {
        this.direction = newDirection;
    },
    getDirection: function () {
        return this.direction;
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
};