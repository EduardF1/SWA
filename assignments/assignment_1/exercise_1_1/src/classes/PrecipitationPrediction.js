const {WeatherPrediction} = require('../classes/WeatherPrediction');

class PrecipitationPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, precipitationTypes) {
        super(time, place, value, type, unit)
        this.precipitationTypes = precipitationTypes
    }

    getExpectedTypes = () => this.precipitationTypes;
    setExpectedTypes = (newExpectedTypes) => this.precipitationTypes = newExpectedTypes;
    setPrecipitationTypes = (newPrecipitationTypes) => this.precipitationTypes = newPrecipitationTypes;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    convertToInches = () => {
        if (this.getDataType().getUnit() === 'MM') {
            this.setValue(this.getValue() / 25.4)
            this.setUnit('IN')
            this.setType('Inches')
        }
    }
    convertToMM = () => {
        if (this.getDataType().getUnit() === 'inches') {
            this.setValue(super.getValue() * 25.4)
            this.setUnit('MM')
            this.setType('Millimeters')
        }
    }
}

module.exports = {
    PrecipitationPrediction
}