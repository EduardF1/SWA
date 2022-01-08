class Event {
    constructor(time, place) {
        this.time = time;
        this.place = place;
    }

    getTime = () => this.time;
    setTime = (newTime) => this.time = newTime;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

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

class WeatherData extends Event {
    constructor(time, place, value, type, unit) {
        super(time, place);
        this.value = value;
        this.dataType = new DataType(type, unit);
    }

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setTime = (newTime) => this.time = newTime;
    getTime = () => this.time;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

class Temperature extends WeatherData {
    constructor(time, place, type, unit, value) {
        super(time, place, type, unit, value);
    }

    convertToF = () => {
        this.setValue(this.getValue() * (9 / 5) + 32);
        this.setDataType(new DataType('Fahrenheit', '°F'));
    }

    convertToC = () => {
        this.setValue((this.getValue() - 32) * (5 / 9));
        this.setDataType(new DataType('Celsius', '°C'));
    }
}

class Precipitation extends WeatherData {
    constructor(time, place, value, type, unit, precipitationType) {
        super(time, place, value, type, unit)
        this.precipitationType = precipitationType
    }

    getPrecipitationType = () => this.precipitationType;

    convertToInches = () => {
        super.setValue(super.getValue() / 25.4)
        super.setDataType(new DataType('Inches', 'IN'))
    }
    convertToMM = () => {
        super.setValue(super.getValue() * 25.4)
        super.setDataType(new DataType('Millimeter', 'MM'))
    }
}

class Wind extends WeatherData {
    constructor(time, place, value, type, unit, direction) {
        super(time, place, value, type, unit)
        this.direction = direction
    }

    getDirection = () => this.direction;

    convertToMPH = () => {
        super.setValue(super.getValue() * 2.237)
        super.setDataType(new DataType('Miles per hour', 'MPH'))
    }
    convertToMPS = () => {
        super.setValue(super.getValue() / 2.237)
        super.setDataType(new DataType('Meters per second', 'MPS'))
    }
}

class CloudCoverage extends WeatherData {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit)
        this.cloudCoverage = cloudCoverage
    }

    getCloudCoverage = () => this.cloudCoverage;
}

class WeatherPrediction extends Event {
    constructor(time, place, value, type, unit) {
        super(time, place)
        this.value = value
        this.dataType = new DataType(type, unit)

    }

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setUnit = (newUnit) => this.dataType.unit = newUnit;

    setType = (newType) => this.dataType = newType;
    getType = () => this.dataType.getType();

    getPlace = () => super.getPlace();
    setPlace = (newPlace) => super.setPlace(newPlace);

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    getMin = (data) => Math.min(data.getValue(), this.getValue());
    getMax = (data) => Math.max(data.getValue(), this.getValue());
}

class TemperaturePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
    }

    convertToF = () => {
        if (this.getDataType().getUnit() === '*C') {
            this.setValue((this.getValue() * 9 / 5) + 32);
            this.getDataType().setUnit('*F');
            this.setType('Fahrenheit');
        }
    }
    convertToC = () => {
        if (this.getDataType().getUnit() === '*F') {
            this.setValue((this.getValue() - 32) * (5 / 9));
            this.getDataType().setUnit('*C');
            this.setType('Celsius');
        }
    }
}

class PrecipitationPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, precipitationTypes) {
        super(time, place, value, type, unit)
        this.precipitationTypes = precipitationTypes
    }

    getExpectedTypes = () => this.precipitationTypes;
    setPrecipitationTypes = (newPrecipitationTypes) => this.precipitationTypes = newPrecipitationTypes;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    convertToInches = () => {
        if (this.getDataType().getUnit() === 'MM') {
            this.setValue(this.getValue() / 25.4)
            this.setUnit('IN')
            this.setType('Inches')
        }
    }
    convertToMM = () => {
        if (this.getDataType().getUnit() === 'inches') {
            this.setValue(super.getValue() * 25.4)
            this.setUnit('MM')
            this.setType('Millimeters')
        }
    }
}

class WindPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, expectedDirections) {
        super(time, place, value, type, unit)
        this.expectedDirections = expectedDirections
    }

    getExpectedDirection = () => this.expectedDirections;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;
    convertToMPH = () => {
        if (this.getDataType().getUnit() === 'MPH') {
            this.setValue(this.getValue() * 2.237);
            this.getDataType().setUnit('MS');
            this.getDataType().setType('Meters per Second');
        }
    };
    convertToMPS = () => {
        if (this.getDataType().getUnit() === 'MS') {
            this.setValue(this.getValue() / 2.237);
            this.getDataType().setUnit('MPH');
            this.getDataType().setType('Milers per Hour');
        }
    };
}

class CloudCoveragePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit)
        this.cloudCoverage = cloudCoverage
    }

    getCloudCoverage = () => this.cloudCoverage;
}

// Tests
const weatherData1 = new WeatherData('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
const temperature1 = new Temperature('May 1, 1997 24:00:00', 'Bucharest C',  'Celsius', '*C', 40);
const precipitation1 = new Precipitation('September 13, 1854 04:11:00', 'Harkov', 22, 'Fahrenheit', '*F', 'rain');
const wind1 = new Wind('December 11, 2021 18:11:00', 'Istanbul', 30, 'Celsius', '*C');
const cloudCoverage = new CloudCoverage('January 2, 2021 01:03:04', 'Barcelona', 44, 'Fahrenheit', '*F');

console.log('<========================================================= WEATHER DATA OBJECT TEST ==================================================================>')
console.log(weatherData1);
console.log('<========================================================= TEMPERATURE OBJECT TEST ==================================================================>')
console.log(temperature1);
temperature1.convertToF();
console.log(temperature1);
console.log('<========================================================= PRECIPITATION OBJECT TEST ==================================================================>')
console.log(precipitation1);
console.log('<========================================================= WIND OBJECT TEST ==================================================================>')
console.log(wind1);
console.log('<========================================================= CLOUD COVERAGE OBJECT TEST ==================================================================>')
console.log(cloudCoverage);
console.log('<========================================================= WEATHER PREDICTION OBJECT TEST ==================================================================>')
const weatherPrediction1 = new WeatherPrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
console.log(weatherPrediction1.matches(weatherData1));
const weatherData2 = new WeatherData('September 13, 2021 14:11:00', 'Lancaster', 999, 'Celsius', '*C');
console.log(weatherPrediction1.getMin(weatherData2));
console.log(weatherPrediction1.getMax(weatherData2));
console.log('<========================================================= TEMPERATURE PREDICTION OBJECT TEST ==================================================================>')
const temperaturePrediction2 = new TemperaturePrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
console.log(temperaturePrediction2);
temperaturePrediction2.convertToF();
console.log(temperaturePrediction2.getValue());
console.log('<========================================================= PRECIPITATION PREDICTION OBJECT TEST ==================================================================>')
const precipitationPrediction1 = new PrecipitationPrediction('November 2, 2021 14:11:00', 'Dublin', 25, 'Celsius', '*C', ['rain', 'wind', 'plague']);
console.log(precipitationPrediction1);
console.log(precipitationPrediction1.getExpectedTypes());
precipitationPrediction1.convertToInches();
console.log(precipitationPrediction1.getValue());
precipitationPrediction1.convertToMM();
console.log(precipitationPrediction1.getValue());
const weatherData3 = new WeatherData('November 2, 2021 14:11:00', 'Dublin', 25, 'Celsius', '*C');
console.log(precipitationPrediction1.matches(weatherData3));
console.log('<========================================================= WIND PREDICTION OBJECT TEST ==================================================================>')
const windPrediction1 = new WindPrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Miles per Hour', 'MPH', ['North', 'South']);
console.log(windPrediction1);
const weatherData4 = new WeatherData('September 12, 2021 14:11:00', 'Monte Casino', 30, 'Meters per Second', 'MS')
console.log(windPrediction1.matches(weatherData4));
windPrediction1.convertToMPH();
console.log(windPrediction1.getValue());
windPrediction1.convertToMPS();
console.log(windPrediction1.getValue());
console.log('<========================================================= CLOUD COVERAGE PREDICTION OBJECT TEST ==================================================================>')
const cloudCoveragePrediction1 = new CloudCoveragePrediction('September 12, 2021 14:11:00', 'Monte Casino', 30, 'Meters per Second', 'MS', 'dense');
console.log(cloudCoveragePrediction1);
console.log(cloudCoveragePrediction1.getCloudCoverage());