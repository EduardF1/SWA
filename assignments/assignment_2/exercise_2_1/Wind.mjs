import {WeatherData} from "./WeatherData.mjs";
const {MPS_TYPE, MPS_UNIT, MPH_TYPE, MPH_UNIT} = require('../../../Constants.js');

/**
 *
 * @param time (Date) The date at which a measurement has occurred.
 * @param place (String) The location at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @param value (Number) Value representing the value of the measurement.
 * @param direction (String) Value representing the direction from which the measurement was taken.
 * @constructor
 */
export function Wind(time, place, type, unit, value, direction) {
    /*
        Call the WeatherData constructor from the context of the Wind object,
        set "this" to the current Wind object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherData.call(this, time, place, type, unit, value);
    // Specific field
    this.direction = direction;
}
/*
    Set the prototype of the Wind "class" to be that of the WeatherData "class".
    Set the inheritance relationship Wind --> WeatherData.
 */
Object.setPrototypeOf(Wind.prototype, WeatherData.prototype);
/**
 * The prototype of the Wind "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getDirection: (function(): *),
 *              convertToMS: Wind.convertToMS,
 *              setDirection: Wind.setDirection,
 *              convertToMPH: Wind.convertToMPH
 *           }
 *        }
 */
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