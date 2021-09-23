const {Event } = require('./Event.mjs');
const {DataType } = require('./DataType.mjs');

class WeatherPrediction extends DataType{
    constructor(time, place, type, unit, min, max) {
        super(type, unit);
        const event = Event(time, place);
        this.min = min;
        this.max = max;
        Object.freeze(this);
    }
    matches = (data) =>
        (this.time === data.getTime()) &&
        (this.type === data.getType()) &&
        (this.unit === data.getUnit()) &&
        (this.place === data.getPlace()) &&
        (((this.min + this.max)/2) === data.getValue());
    getMax = () => this.max;
    getMin = () => this.min;
}

export default WeatherPrediction;