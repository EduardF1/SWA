const {IN_TYPE, MM_TYPE} = require('Constants');

const Precipitation = (unit, value, precipitationType) => {
    this.unit = unit;
    this.value = value;
    this.precipitationType = precipitationType;
}
Precipitation.prototype.getUnit = () => this.unit;
Precipitation.prototype.getValue = () => this.value;
Precipitation.prototype.getPrecipitationType = () => this.precipitationType;
Precipitation.prototype.convertToInches = () => {
    if (this.unit === MM_TYPE) {
        this.unit = IN_TYPE;
        this.value = this.value / 25.4;
    }
}
Precipitation.prototype.convertToMM = () => {
    if (this.unit === IN_TYPE) {
        this.unit = MM_TYPE;
        this.value = this.value * 25.4;
    }
}
Object.freeze(Precipitation);

export default Precipitation;