const {WeatherData} = require('./WeatherData');

const CloudCoverage = (place, time, type, unit, value) => {
    let state = {place: place, time: time, type: type, unit: unit, value: value};
    const weatherData = new WeatherData(state.place, state.time, state.type, state.unit, state.value);
    return Object.assign({}, weatherData);
}

module.exports = {
    CloudCoverage
}