const {Event} = require('./Event');
const {DataType} = require('./DataType');

class WeatherData extends Event {
    constructor(place, time, type, unit, value) {
        super(place, time);
        this.value = value;
        this.dataType = new DataType(type, unit);
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