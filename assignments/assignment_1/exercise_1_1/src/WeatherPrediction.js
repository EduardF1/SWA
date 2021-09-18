const {Event} = require('../src/Event');
const {DataType} = require('../src/DataType');

const WeatherPrediction = (unit, type, place, time, min, max) => {
    let state = {unit: unit, type: type, place: place, time:time, min: min, max: max};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
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
        data.getEvent().getTime() === event.getTime() &&
        data.getEvent().getPlace() === event.getPlace() &&
        data.getDataType().getType() === dataType.getType() &&
        data.getDataType().getUnit() === dataType.getUnit()
    );
    return {...event, ...dataType, getMin, getMax, setMin, setMax, matches, getEvent, getDataType, setEvent, setDataType};
}

module.exports = {
    WeatherPrediction
}