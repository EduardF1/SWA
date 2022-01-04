import {WeatherPrediction} from "./WeatherPrediction.mjs";

/**
 * Constructor function for the CloudCoveragePrediction "class".
 * @param time (Date) The date at which a measurement has occurred.
 * @param place (String) The location at which a measurement has occurred.
 * @param type (String) The type of the measurement which has occurred.
 * @param unit (String) The unit of the measurement which has occurred.
 * @param min (Number) The minimal value of the measurement.
 * @param max (Number) The maximum value of the measurement.
 * @constructor
 */
function CloudCoveragePrediction(time, place, type, unit, min, max) {
    /*
        Call the WeatherPrediction from the context of the CloudCoveragePrediction object,
        set "this" to the current CloudCoveragePrediction object and then list (individually)
        the constructor (superclass) arguments.
     */
    WeatherPrediction.call(this, time, place, type, unit, min, max);
}
/*
    Set the prototype of the CloudCoveragePrediction "class" to be that of the WeatherPrediction "class".
    Set the inheritance relationship CloudCoveragePrediction --> WeatherPrediction.
 */
Object.setPrototypeOf(CloudCoveragePrediction.prototype, WeatherPrediction.prototype);