const {WeatherPrediction} = require('./WeatherPrediction');

const CloudCoveragePrediction = (state) => {
    let weatherPrediction =  WeatherPrediction(state);
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    return {...weatherPrediction, setWeatherPrediction, getWeatherPrediction};
}

module.exports = {
    CloudCoveragePrediction
}