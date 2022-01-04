const {WeatherData} = require('./WeatherData');

/**
 * Cloud coverage class, subclass of WeatherData.
 * Has as fields/properties "time", "place", "value", "type", "unit" and "cloudCoverage" and getters/setters for those.
 */
class CloudCoverage extends WeatherData {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit);
        this.cloudCoverage = cloudCoverage;
    }

    getCloudCoverage = () => this.cloudCoverage;
    setCloudCoverage = (cloudCoverage_) => this.cloudCoverage = cloudCoverage_;
}

module.exports = {
    CloudCoverage
}