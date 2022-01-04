/**
 * Constructor function for the DataType "class".
 * @param type (String) The type of the measurement.
 * @param unit (String) The unit of the measurement.
 * @constructor
 */
export function DataType(type, unit) {
    this.type = type;
    this.unit = unit;
}

/**
 * The prototype of the DataType "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getType: (function(): *),
 *              setUnit: DataType.setUnit,
 *              setType: DataType.setType,
 *              getUnit: (function(): *)
 *          }
 *       }
 */
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