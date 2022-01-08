const {WeatherPrediction} = require('./WeatherPrediction');

class WindPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, expectedDirections) {
        super(time, place, value, type, unit);
        this.expectedDirections = expectedDirections;
        Object.freeze(this);
    }

    getExpectedDirections = () => this.expectedDirections;
    setExpectedDirections = (newExpectedDirections) => this.expectedDirections = newExpectedDirections;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;
    convertToMPH = () => {
        if (this.getDataType().getUnit() === 'MPH') {
            this.setValue(this.getValue() * 2.237);
            this.getDataType().setUnit('MS');
            this.getDataType().setType('Meters per Second');
        }
    };
    convertToMPS = () => {
        if (this.getDataType().getUnit() === 'MS') {
            this.setValue(this.getValue() / 2.237);
            this.getDataType().setUnit('MPH');
            this.getDataType().setType('Milers per Hour');
        }
    };
}

export default WindPrediction;