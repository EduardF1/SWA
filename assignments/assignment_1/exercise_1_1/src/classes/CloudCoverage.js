const {WeatherData} = require('../classes/WeatherData');

class CloudCoverage extends WeatherData {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit)
        this.cloudCoverage = cloudCoverage
    }

    getCloudCoverage = () => this.cloudCoverage;
    setCloudCoverage = (newCloudCoverage) => this.cloudCoverage = newCloudCoverage;
}

module.exports = {
    CloudCoverage
}