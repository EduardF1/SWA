const {WeatherPrediction} = require('WeatherData.mjs');

class CloudCoveragePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
        Object.freeze(this);
    }
}

export default CloudCoveragePrediction;