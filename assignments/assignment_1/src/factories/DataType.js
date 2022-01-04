/**
 * Constructor function for the DataType "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for DataType objects.
 * @returns {{
 *              getType: (function(): *),
 *              setUnit: (function(*): *),
 *              setType: (function(*): *),
 *              getUnit: (function(): *)
 *           }}
 * @constructor
 */
const DataType = (state) => {
    const setType = (newType) => state.type = newType;
    const getType = () => state.type;
    const getUnit = () => state.unit
    const setUnit = (newUnit) => state.unit = newUnit;
    /*
        Returns a new object created with "Object.assign()" to which an initial, empty object is given
        as target and the source object is defined with the function properties of the DataType function.
     */
    return Object.assign({}, {setType,getType,getUnit,setUnit});
}

module.exports = {
    DataType
}