const {WeatherData} = require('WeatherData.mjs');

class CloudCoverage extends WeatherData {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
        Object.freeze(this);
    }

    getCloudCoverage = () => this.cloudCoverage;
    setCloudCoverage = (newCloudCoverage) => this.cloudCoverage = newCloudCoverage;
}

export default CloudCoverage;