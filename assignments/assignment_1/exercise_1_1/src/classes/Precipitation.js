const {WeatherData} = require('../classes/WeatherData');
const {IN, IN_TYPE, MM, MM_TYPE} = require('../../../Constants');

class Precipitation extends WeatherData {
    constructor(time, place, value, type, unit, precipitationType) {
        super(time, place, value, type, unit)
        this.precipitationType = precipitationType
    }

    getPrecipitationType = () => this.precipitationType;
    setPrecipitationType = (newPrecipitationType) => this.precipitationType = newPrecipitationType;

    convertToInches = () => {
        super.setValue(super.getValue() / 25.4)
        super.setDataType(new DataType(IN_TYPE, IN))
    }
    convertToMM = () => {
        super.setValue(super.getValue() * 25.4)
        super.setDataType(new DataType(MM_TYPE, MM))
    }
}

module.exports = {
    Precipitation
}