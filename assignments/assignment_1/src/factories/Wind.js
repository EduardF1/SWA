const {WeatherData} = require('./WeatherData');
const {MPH_TYPE, MPH, MPS, MPS_TYPE} = require("../../../../Constants");

const Wind = (place, time, type, unit, value, direction) => {
    let state = {time: time, place: place, type: type, unit: unit, value: value, direction: direction};
    const weatherData = WeatherData(state.place, state.time, state.type, state.unit, state.value);
    const getDirection = () => state.direction;
    const setDirection = (newDirection) => state.direction = newDirection ? newDirection : state.direction;
    const convertToMPH = () => {
        if (weatherData.getType() === MPS_TYPE) {
            weatherData.setType(MPH_TYPE);
            weatherData.setUnit(MPH);
            weatherData.setValue(weatherData.getValue() * 2.237);
        }
    }
    const convertToMS = () => {
        if (weatherData.getType() === MPH_TYPE) {
            weatherData.setType(MPS_TYPE);
            weatherData.setUnit(MPS);
            weatherData.setValue(weatherData.getValue() / 2.237);
        }
    }
    return Object.assign({}, weatherData, {getDirection, setDirection, convertToMS, convertToMPH});
}

module.exports = {
    Wind
}