import {WeatherPrediction} from "./WeatherPrediction.mjs";
import {MM_TYPE, MM_UNIT, IN_TYPE, IN_UNIT} from "../../../Constants.js";

/**
 * Constructor function for the PrecipitationPrediction "class".
 * @param time (Date) The date at which a measurement has occurred.
 * @param place (String) The location at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @param min (Number) The minimal value of the measurement.
 * @param max (Number) The maximum value of the measurement.
 * @param expectedTypes (Array of Strings) The expected types of the measurement.
 * @constructor
 */
function PrecipitationPrediction(time, place, type, unit, min, max, expectedTypes) {
    /*
        Call the WeatherPrediction from the context of the PrecipitationPrediction object,
        set "this" to the current PrecipitationPrediction object and then list (individually)
        the constructor (superclass) arguments.
     */
    WeatherPrediction.call(this, time, place, type, unit, min, max);
    // Specific attribute.
    this.expectedTypes = expectedTypes;
}
/*
    Set the prototype of the PrecipitationPrediction "class" to be that of the WeatherPrediction "class".
    Set the inheritance relationship PrecipitationPrediction --> WeatherPrediction.
 */
Object.setPrototypeOf(PrecipitationPrediction.prototype, WeatherPrediction.prototype);
/**
 * The prototype of the PrecipitationPrediction "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              setExpectedTypes: PrecipitationPrediction.setExpectedTypes,
 *              getExpectedTypes: (function(): *),
 *              convertToMM: PrecipitationPrediction.convertToMM,
 *              convertToInches: PrecipitationPrediction.convertToInches
 *           }
 *       }
 */
PrecipitationPrediction.prototype = {
    setExpectedTypes: function (newExpectedTypes) {
        this.expectedTypes = newExpectedTypes;
    },
    getExpectedTypes: function () {
        return this.expectedTypes;
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