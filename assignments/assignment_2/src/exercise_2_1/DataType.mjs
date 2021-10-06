export function DataType(type, unit) {
    this.type = type;
    this.unit = unit;
}

DataType.prototype = {
    setType: function (newType) {
        this.type = newType;
    },
    getType: function () {
        return this.type;
    },
    setUnit: function (newUnit) {
        this.unit = newUnit;
    },
    getUnit: function () {
        return this.unit;
    }
}