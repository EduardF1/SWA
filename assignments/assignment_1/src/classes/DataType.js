class DataType {
    constructor(type, unit) {
        this.type = type;
        this.unit = unit;
    }

    setType = (newType) => this.type = newType;
    getType = () => this.type;

    setUnit = (newUnit) => this.unit = newUnit;
    getUnit = () => this.unit;
}
module.exports ={
    DataType
}