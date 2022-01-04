const {Event} = require('./Event');
const {DataType} = require('./DataType');

/**
 * WeatherData class, example of multiple inheritance, it is a subclass of both
 * Event and DataType classes. The multiple inheritance mechanism is possible by
 * using "Object.assign()" which is given as arguments for target,
 * "this" (the WeatherData object instance at creation) and as sources, the
 * Event and DataType classes. The initialization/object creation of the WeatherData
 * object instances takes place in the constructor function body.
 * Has as attributes "place", "time", "type", "unit" and "value".
 * Has getters and setters for all the attributes.
 */
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

    getType = () => this.type;
    setType = (newType) => this.type = newType;

    getUnit = () => this.unit;
    setUnit = (newUnit) => this.unit = newUnit;

    setTime = (newTime) => this.time = newTime;
    getTime = () => this.time;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

module.exports = {
    WeatherData
}