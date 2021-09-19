const {WeatherData} = require('./WeatherData');
const {MM_TYPE, MM, IN_TYPE, IN} = require("../../Constants");

const Precipitation = (place, time, type, unit, value, precipitationType) => {
    let state = {time: time, place: place, type: type, unit: unit, value: value, precipitationType: precipitationType};
    let weatherData = WeatherData(state.place, state.time, state.type, state.unit, state.value);
    const getPrecipitationType = () => state.precipitationType;
    const convertToInches = () => {
        if (weatherData.getType() === MM_TYPE) {
            weatherData.setType(IN_TYPE);
            weatherData.setUnit(IN);
            weatherData.setValue(weatherData.getValue() / 25.4);
        }
    }
    const convertToMM = () => {
        if (weatherData.getType() === IN_TYPE) {
            weatherData.setType(MM_TYPE);
            weatherData.setUnit(MM);
            weatherData.setValue(weatherData.getValue() * 25.4);
        }
    }
    return Object.assign({}, weatherData, {convertToInches, convertToMM, getPrecipitationType});
}

module.exports = {
    Precipitation
}