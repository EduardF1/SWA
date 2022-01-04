const {MPH_UNIT, MPH_TYPE, MPS_TYPE, MPS_UNIT} = require("../../../../Constants");

/**
 * Wind class, subclass of WeatherData.
 * Has as attributes/properties "time", "place", "value", "type", "unit" and "direction".
 * Has getters and setters for all attributes and two methods for converting the metrics' information from International
 * to US and vice-versa.
 */
class Wind extends WeatherData {
    constructor(time, place, value, type, unit, direction) {
        super(time, place, value, type, unit)
        this.direction = direction;
    }

    getDirection = () => this.direction;
    setDirection = (direction_) => this.direction = direction_;

    convertToMPH = () => {
        super.setValue(super.getValue() * 2.237);
        super.setDataType(new DataType(MPH_TYPE, MPH_UNIT));
    }
    convertToMPS = () => {
        super.setValue(super.getValue() / 2.237);
        super.setDataType(new DataType(MPS_TYPE, MPS_UNIT));
    }
}