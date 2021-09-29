const {Event} = require('./Event');
const {DataType} = require('./DataType');

class WeatherData  {
    constructor(place, time, type, unit, value) {
        Object.assign(
            this,
            new Event(place, time),
            new DataType(type, unit)
        )
        this.value = value;
    }

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setTime = (newTime) => this.time = newTime;
    getTime = () => this.time;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

module.exports = {
    WeatherData
}