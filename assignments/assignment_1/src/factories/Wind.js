const {WeatherData} = require('./WeatherData');
const {MPH_TYPE, MPH_UNIT, MPS_UNIT, MPS_TYPE} = require("../../../../Constants");

const Wind = (state) => {
    const weatherData = WeatherData(state);
    const getDirection = () => state.direction;
    const setDirection = (newDirection) => state.direction = newDirection ? newDirection : state.direction;
    const convertToMPH = () => {
        if (weatherData.getType() === MPS_TYPE) {
            weatherData.setType(MPH_TYPE);
            weatherData.setUnit(MPH_UNIT);
            weatherData.setValue(weatherData.getValue() * 2.237);
        }
    }
    const convertToMS = () => {
        if (weatherData.getType() === MPH_TYPE) {
            weatherData.setType(MPS_TYPE);
            weatherData.setUnit(MPS_UNIT);
            weatherData.setValue(weatherData.getValue() / 2.237);
        }
    }
    return Object.assign({}, weatherData, {getDirection, setDirection, convertToMS, convertToMPH});
}

module.exports = {
    Wind
}