const {IN_UNIT, MM_UNIT} = require('Constants');

const PrecipitationPrediction = (unit, minValue, maxValue, expectedTypes) => {
    this.unit = unit;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.expectedTypes = [...expectedTypes];
};
PrecipitationPrediction.prototype.getMinValue = () => this.minValue;
PrecipitationPrediction.prototype.getMaxValue = () => this.maxValue;
PrecipitationPrediction.prototype.getUnit = () => this.unit;
PrecipitationPrediction.prototype.getExpectedTypes = () => this.expectedTypes;
PrecipitationPrediction.prototype.matches = (data) =>
    (this.unit === data.unit) &&
    (this.expectedTypes.includes(data.precipitationType)) &&
    (((this.minValue + this.maxValue) / 2) === data.value)
PrecipitationPrediction.prototype.convertToInches = () => {
    if (this.unit === MM_UNIT) {
        this.minValue = this.minValue / 25.4;
        this.maxValue = this.maxValue / 25.4;
        this.unit = IN_UNIT;
    }
};
PrecipitationPrediction.prototype.convertToMM = () => {
    if (this.unit === IN_UNIT) {
        this.minValue = this.minValue * 25.4;
        this.maxValue = this.maxValue * 25.4;
        this.unit = MM_UNIT;
    }
};
Object.freeze(PrecipitationPrediction);

export default PrecipitationPrediction;
