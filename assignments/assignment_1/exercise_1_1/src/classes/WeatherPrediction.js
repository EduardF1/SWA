const {Event} = require('../classes/Event');

class WeatherPrediction extends Event {
    constructor(time, place, value, type, unit) {
        super(time, place)
        this.value = value
        this.dataType = new DataType(type, unit)

    }

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setUnit = (newUnit) => this.dataType.unit = newUnit;

    setType = (newType) => this.dataType = newType;
    getType = () => this.dataType.getType();

    getPlace = () => super.getPlace();
    setPlace = (newPlace) => super.setPlace(newPlace);

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    getMin = (data) => Math.min(data.getValue(), this.getValue());
    getMax = (data) => Math.max(data.getValue(), this.getValue());
}

module.exports = {
    WeatherPrediction
}