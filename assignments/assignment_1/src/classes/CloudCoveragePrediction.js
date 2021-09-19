const {WeatherPrediction} = require('./WeatherPrediction');

class CloudCoveragePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit)
    }
}

module.exports = {
    CloudCoveragePrediction
}