const {MPH_UNIT, MPS_UNIT} = require('Constants.js');

const Wind = (unit, value, direction) => {
    this.unit = unit;
    this.value = value;
    this.direction = direction;
}
Wind.prototype.getUnit = () => this.unit;
Wind.prototype.getValue = () => this.value;
Wind.prototype.getDirection = () => this.direction;
Wind.prototype.convertToMPH = () => {
    if (this.unit === MPH_UNIT) {
        this.unit = MPS_UNIT;
        this.value = this.value * 2.24;
    }
};
Wind.prototype.convertToMPS = () => {
    if (this.unit === MPS_UNIT) {
        this.unit = MPH_UNIT;
        this.value = this.value * 0.45;
    }
};
Object.freeze(Wind);

export default Wind;