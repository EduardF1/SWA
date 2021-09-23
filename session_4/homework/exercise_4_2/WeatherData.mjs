const {Event } = require('./Event.mjs');
const {DataType } = require('./DataType.mjs');

class WeatherData extends Event {
    constructor(time, place, type, unit, value) {
        super(time, place);
        const dataType = DataType(type, unit);
        this.value = value;
        Object.freeze(this);
    }
    getValue = () => this.value;
}

export default WeatherData;