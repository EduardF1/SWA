const {WeatherPrediction} = require('./WeatherPrediction');

/**
 * CloudCoveragePrediction class, inherits from WeatherPrediction.
 * Has as attributes/fields "time", "place", "value", "type" and "unit".
 * All the attributes have getters and setters.
 */
class CloudCoveragePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit)
    }
}

module.exports = {
    CloudCoveragePrediction
}