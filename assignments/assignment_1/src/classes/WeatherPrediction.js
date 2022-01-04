const {Event} = require('./Event');

/**
 * WeatherPrediction class, inherits from the Event and DataType classes. The multiple inheritance is possible
 * by using the "Object.assign()" function which as a source argument receives "this" (the WeatherPrediction instance object)
 * and as sources the Event and DataType classes.
 * Has as attributes/properties "time", "place", "value", "type" and "unit".
 * Has getters and setters for all attributes.
 * Has a method, "matches" used to assert whether or not a WeatherPrediction object matches a WeatherData object (assertion done
 * by comparison of the "value" and "type" properties).
 * Has two methods, "max" and "min" which return the minimum and maximum of the
 * WeatherPrediction object's value and the given WeatherData argument's value.
 */
class WeatherPrediction {
    constructor(time, place, value, type, unit) {
        Object.assign(
            this,
            new Event(place, time),
            new DataType(type, unit)
        )
        this.value = value;
    }

    getDataType = () => this.dataType;
    setDataType = (dataType_) => this.dataType = dataType_;
    setUnit = (unit_) => this.dataType.unit = unit_;
    getUnit = () => this.dataType.unit;
    setType = (type_) => this.dataType = type_;
    getType = () => this.dataType.getType();
    getPlace = () => super.getPlace();
    setPlace = (place_) => super.setPlace(place_);

    getValue = () => this.value;
    setValue = (value_) => this.value = value_;

    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    getMin = (data) => Math.min(data.getValue(), this.getValue());
    getMax = (data) => Math.max(data.getValue(), this.getValue());
}

module.exports = {
    WeatherPrediction
}