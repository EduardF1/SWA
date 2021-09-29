const {Event} = require('./Event');
const {DataType} = require('./DataType');

function WeatherData(state) {
    const getValue = () => state.value;
    const setValue = (newValue) => state.value = newValue ? newValue : state.value;
    return Object.assign({}, Event(state), DataType(state), {getValue, setValue});
}

module.exports = {
    WeatherData
}

