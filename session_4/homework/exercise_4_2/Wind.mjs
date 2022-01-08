
class Wind extends WeatherData {
    constructor(time, place, value, type, unit, direction) {
        super(time, place, value, type, unit);
        this.direction = direction;
        Object.freeze(this);
    }

    getDirection = () => this.direction;
    setDirection = (newDirection) => this.direction = newDirection;

    convertToMPH = () => {
        super.setValue(super.getValue() * 2.237);
        super.setDataType(new DataType('Miles per hour', 'MPH'));
    }
    convertToMPS = () => {
        super.setValue(super.getValue() / 2.237);
        super.setDataType(new DataType('Meters per second', 'MPS'));
    }
}

export default Wind;