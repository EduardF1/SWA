const {WeatherLedger} = require('./WeatherLedger');

const WeatherHistory = (data) => {
    let state = {data:data};
    const lowestValue = () => state.data.reduce((previous, current) => previous.getValue() < current.getValue() ? previous : current).getValue();
    const getData = () => state.data;
    const setData = (newWeatherData) => state.data.concat(data);
    return Object.assign({}, WeatherLedger(state.data), {lowestValue, getData, setData});
}

module.exports = {
    WeatherHistory
}

console.log(WeatherHistory());