import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {MPH_TYPE, MPH_UNIT, MPS_TYPE, MPS_UNIT} from "../../../Constants.js";

/**
 *
 * @param time (Date) The date at which a measurement has occurred.
 * @param place (String) The location at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @param min (Number) The minimal value of the measurement.
 * @param max (Number) The maximum value of the measurement.
 * @param expectedDirections (Array of Strings) The expected directions from which the measurement is taken.
 * @constructor
 */
function WindPrediction(time, place, type, unit, min, max, expectedDirections) {
    /*
        Call the WeatherPrediction from the context of the WindPrediction object,
        set "this" to the current WindPrediction object and then list (individually)
        the constructor (superclass) arguments.
    */
    WeatherPrediction.call(this, time, place, type, unit, min, max);
    // Specific attribute.
    this.expectedDirections = expectedDirections;
}
/*
    Set the prototype of the WindPrediction "class" to be that of the WeatherPrediction "class".
    Set the inheritance relationship WindPrediction --> WeatherPrediction.
 */
Object.setPrototypeOf(WindPrediction.prototype, WeatherPrediction.prototype);
/**
 * The prototype of the WindPrediction "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              convertToMS: WindPrediction.convertToMS,
 *              setExpectedTypes: WindPrediction.setExpectedTypes,
 *              getExpectedTypes: (function(): *),
 *              convertToMPH: WindPrediction.convertToMPH
 *           }
 *        }
 */
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