const {Event} = require('./Event');
const {DataType} = require('./DataType');

const WeatherPrediction = (state) => {
    let event =  Event(state);
    let dataType =  DataType(state);
    const getMin = () => state.min;
    const setMin = (newMin) => state.min = newMin;
    const getMax = () => state.max;
    const setMax = (newMax) => state.max = newMax;
    const matches = (data) => (
        data.getValue() === ((state.min + state.max) / 2) &&
        data.getTime().getTime() === event.getTime().getTime() &&
        data.getPlace() === event.getPlace() &&
        data.getType() === dataType.getType() &&
        data.getUnit() === dataType.getUnit()
    );
    return {...event, ...dataType, getMin, getMax, setMin, setMax, matches};
}

module.exports = {
    WeatherPrediction
}