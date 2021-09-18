const {Event} = require('../src/Event');
const {DataType} = require('../src/DataType');

function WeatherData(place, time,type, unit, value) {
    let state = {place: place, time:time, type: type, unit: unit, value: value};
    const getValue = () => state.value;
    const setValue = (newValue) => state.value = newValue ? newValue : state.value;
    return Object.assign({}, Event(state.place, state.time), DataType(state.type, state.unit), {getValue, setValue});
}

module.exports = {
    WeatherData
}

