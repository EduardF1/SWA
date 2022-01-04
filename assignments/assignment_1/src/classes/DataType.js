/**
 * DataType class.
 * Has as attributes/properties "type" and "unit".
 * All the attributes have getters and setters.
 */
class DataType {
    constructor(type, unit) {
        this.type = type;
        this.unit = unit;
    }

    setType = (type_) => this.type = type_;
    getType = () => this.type;

    setUnit = (unit_) => this.unit = unit_;
    getUnit = () => this.unit;
}
module.exports ={
    DataType
}