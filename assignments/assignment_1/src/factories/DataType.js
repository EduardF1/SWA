const DataType = (state) => {
    const setType = (newType) => state.type = newType;
    const getType = () => state.type;
    const getUnit = () => state.unit
    const setUnit = (newUnit) => state.unit = newUnit;
    return Object.assign({}, {setType,getType,getUnit,setUnit});
}

module.exports = {
    DataType
}