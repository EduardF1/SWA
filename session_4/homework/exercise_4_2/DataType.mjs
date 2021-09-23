class DataType {
    constructor(type, unit) {
        this.type = type;
        this.unit = unit;
        Object.freeze(this);
    }
    getType = () => this.type;
    getUnit = () => this.unit;
}

export default DataType;