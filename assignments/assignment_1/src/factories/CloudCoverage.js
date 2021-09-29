const {WeatherData} = require('./WeatherData');

const CloudCoverage = (state) => {
    const weatherData = new WeatherData(state);
    return Object.assign({}, weatherData);
}

module.exports = {
    CloudCoverage
}