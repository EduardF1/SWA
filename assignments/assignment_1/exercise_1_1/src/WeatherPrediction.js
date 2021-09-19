const {Event} = require('../src/Event');
const {DataType} = require('../src/DataType');

const WeatherPrediction = (unit, type, place, time, min, max) => {
    let state = {unit: unit, type: type, place: place, time:time, min: min, max: max};
    let event =  Event(state.place, state.time);
    let dataType =  DataType(state.type, state.unit);
    const getMin = () => state.min;
    const setMin = (newMin) => state.min = newMin;
    const getMax = () => state.max;
    const getEvent = () => event;
    const setEvent = (newEvent) => event = newEvent;
    const setDataType = (newDataType) => dataType = newDataType;
    const getDataType = () => dataType;
    const setMax = (newMax) => state.max = newMax;
    const matches = (data) => (
        data.getValue() === ((state.min + state.max) / 2) &&
        data.getTime().getTime() === event.getTime().getTime() &&
        data.getPlace() === event.getPlace() &&
        data.getType() === dataType.getType() &&
        data.getUnit() === dataType.getUnit()
    );
    return {...event, ...dataType, getMin, getMax, setMin, setMax, matches, getEvent, getDataType, setEvent, setDataType};
}

module.exports = {
    WeatherPrediction
}