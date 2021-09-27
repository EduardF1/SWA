const NEW_LINE = '\n';
const MPH_UNIT = 'MPH';
const MPH_TYPE = 'Miles per Hour';
const MPS_UNIT = 'MS';
const MPS_TYPE = 'Meters per Second';
const FAHRENHEIT_TYPE = 'Fahrenheit';
const MM_UNIT = 'MM';
const MM_TYPE ='Millimeters';
const IN_UNIT = 'IN';
const IN_TYPE = 'Inches';
const FAHRENHEIT_UNIT = '*F';
const CELSIUS_UNIT = '*C';
const CELSIUS_TYPE = 'Celsius';

function Event(place) {
    // initial state (attributes)
    const state = {time: new Date().toLocaleDateString(), place};
    const setTime = (newTime) => state.time = newTime;
    const setPlace = (newPlace) => state.place = newPlace;
    const getTime = () => state.time;
    const getPlace = () => state.place;
    const toString = () => `Place: ${getPlace()} --- Time: ${getTime()}`;
    return {setTime, setPlace, getTime, getPlace, toString}
}

const event1 = new Event('Miami');
console.log(NEW_LINE + '<============== EVENT OBJECT TEST 1 ===================>' + NEW_LINE + event1.toString());
event1.setPlace('Chicago');
event1.setTime('September 13, 2021 14:11:00');
console.log(NEW_LINE + '<============== EVENT OBJECT TEST 2 ===================>' + NEW_LINE + event1.toString());

function DataType(unit, type) {
    // initial state (attributes)
    const state = {unit, type};
    const setType = (newType) => state.type = newType;
    const setUnit = (newUnit) => state.unit = newUnit;
    const getType = () => state.type;
    const getUnit = () => state.unit;
    const toString = () => `Unit: ${getUnit()} --- Type: ${getType()}`;
    return {setType, setUnit, getType, getUnit, toString}
}

const dataType1 = new DataType('bits', 'integer');
console.log(NEW_LINE + '<============== DATATYPE OBJECT TEST 1 ===================>' + NEW_LINE + dataType1.toString());
dataType1.setUnit('true/false');
dataType1.setType('boolean');
console.log(NEW_LINE + '<============== DATATYPE OBJECT TEST 2 ===================>' + NEW_LINE + dataType1.toString());

function WeatherData(value, place, type, unit) {
    const state = {value, place, type, unit};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    const getValue = () => state.value;
    const getEvent = () => event;
    const setEvent = (newPlace) => event = new Event(newPlace);
    const setDataType = (newDataType) => dataType = new DataType(newDataType.type, newDataType.unit);
    const getDataType = () => dataType;
    const setValue = (newValue) => state.value = newValue;
    return {...event, ...dataType, getValue, setValue, getEvent, setEvent, getDataType, setDataType};
}

const weatherData1 = new WeatherData(30, 'Barcelona', CELSIUS_TYPE, CELSIUS_UNIT);
console.log(NEW_LINE + '============== WEATHER DATA OBJECT TEST 1 ===================>');
console.log(weatherData1.getValue());
console.log(
    weatherData1.getEvent().getPlace() + NEW_LINE +
    weatherData1.getEvent().getTime() + NEW_LINE +
    weatherData1.getDataType().getUnit() + NEW_LINE +
    weatherData1.getDataType().getType() + NEW_LINE +
    weatherData1.getValue()
);
console.log(NEW_LINE + '============== WEATHER DATA OBJECT TEST 2 ===================>');
weatherData1.setValue(100);
weatherData1.setEvent('Berlin');
weatherData1.setDataType({unit: FAHRENHEIT_UNIT, type: FAHRENHEIT_TYPE});
console.log(
    weatherData1.getEvent().getPlace() + NEW_LINE +
    weatherData1.getDataType().getUnit() + NEW_LINE +
    weatherData1.getDataType().getType() + NEW_LINE +
    weatherData1.getValue()
);

function Temperature(place, type, unit, value) {
    let state = {place, type: type, unit: unit, value: value};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherData = new WeatherData(state.value, event.getPlace(), dataType.getUnit(), dataType.getType());
    const convertToF = () => {
        if (type === CELSIUS_TYPE) {
            weatherData.getDataType().setUnit(FAHRENHEIT_UNIT);
            weatherData.setValue(weatherData.getValue() * 1.8 + 32);
            weatherData.getDataType().setType(FAHRENHEIT_TYPE);
        }
    }
    const convertToC = () => {
        if (weatherData.getDataType().getType() === FAHRENHEIT_TYPE) {
            weatherData.getDataType().setUnit(CELSIUS_UNIT);
            weatherData.setValue((weatherData.getValue() - 32) / 1.8);
            weatherData.getDataType().setType(CELSIUS_TYPE);
        }
    }
    const getWeatherData = () => weatherData;
    const setWeatherData = (newWeatherData) => weatherData = new WeatherData(newWeatherData);
    return {...weatherData, convertToF, convertToC, getWeatherData, setWeatherData};
}

const temperature1 = new Temperature('Sibiu', CELSIUS_TYPE, CELSIUS_UNIT, 100);
console.log(NEW_LINE + '============== TEMPERATURE OBJECT TEST 1 ===================>');
console.log(
    temperature1.getWeatherData().getValue() + NEW_LINE +
    temperature1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    temperature1.getWeatherData().getDataType().getType() + NEW_LINE +
    temperature1.getWeatherData().getEvent().getTime() + NEW_LINE +
    temperature1.getWeatherData().getEvent().getPlace()
);
temperature1.convertToF();
console.log(temperature1.getWeatherData().getValue());
temperature1.convertToC();
console.log(temperature1.getWeatherData().getValue());
temperature1.convertToF();
console.log(temperature1.getWeatherData().getValue());
temperature1.convertToC();
console.log(temperature1.getWeatherData().getValue());

function Precipitation(place, type, unit, value, precipitationType) {
    let state = {place, type: type, unit: unit, value: value, precipitationType: precipitationType};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherData = new WeatherData(state.value, event.getPlace(), dataType.getType(), dataType.getUnit());
    const convertToInches = () => {
        if (type === 'MM') {
            weatherData.getDataType().setUnit('Inches');
            weatherData.setValue(Math.round(weatherData.getValue() / 25.4));
            weatherData.getDataType().setType('IN');
        }
    }
    const convertToMM = () => {
        if (weatherData.getDataType().getType() === 'IN') {
            weatherData.getDataType().setUnit('MM');
            weatherData.setValue(Math.round(weatherData.getValue() * 0.0393701));
            weatherData.getDataType().setType('Millimeter');
        }
    }
    const getPrecipitationType = () => state.precipitationType;
    const getWeatherData = () => weatherData;
    const setWeatherData = (newWeatherData) => weatherData = new WeatherData(newWeatherData);
    return {...weatherData, convertToInches, convertToMM, getWeatherData, setWeatherData, getPrecipitationType};
}

console.log(NEW_LINE + '============== PRECIPITATION OBJECT TEST 1 ===================>');
const precipitation1 = new Precipitation('Chicago', 'MM', 'Millimeter', 100, 'rain');
console.log(
    precipitation1.getWeatherData().getValue() + NEW_LINE +
    precipitation1.getWeatherData().getEvent().getTime() + NEW_LINE +
    precipitation1.getWeatherData().getEvent().getPlace() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getType() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    precipitation1.getPrecipitationType()
);
console.log(NEW_LINE + '============== PRECIPITATION OBJECT TEST 2 ===================>');
precipitation1.convertToInches();
console.log(
    precipitation1.getWeatherData().getValue() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getType()
);
precipitation1.convertToMM();
console.log(
    precipitation1.getWeatherData().getValue() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    precipitation1.getWeatherData().getDataType().getType()
);

function Wind(place, type, unit, value, direction) {
    let state = {place: place, type: type, unit: unit, value: value, direction: direction};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherData = new WeatherData(state.value, event.getPlace(), dataType.getType(), dataType.getUnit());
    const getDirection = () => state.direction;
    const convertToMPH = () => {
        if (type === MPS_UNIT) {
            weatherData.getDataType().setUnit(MPH_TYPE);
            weatherData.setValue(Math.round(weatherData.getValue() * 2.24));
            weatherData.getDataType().setType(MPH_UNIT);
        }
    }
    const convertToMS = () => {
        if (weatherData.getDataType().getType() === MPH_UNIT) {
            weatherData.getDataType().setUnit(MPS_TYPE);
            weatherData.setValue(Math.round(weatherData.getValue() * 0.44704) - 1);
            weatherData.getDataType().setType(MPS_UNIT);
        }
    }
    const getWeatherData = () => weatherData;
    const setWeatherData = (newWeatherData) => weatherData = new WeatherData(state.value, newWeatherData.getPlace(), newWeatherData.getType(), newWeatherData.getUnit());
    return {...weatherData, convertToMPH, convertToMS, getWeatherData, setWeatherData, getDirection};
}

console.log(NEW_LINE + '============== WIND OBJECT TEST 1 ===================>');
const wind1 = new Wind('Chicago', MPS_UNIT, MPS_TYPE, 1000, 'North');
console.log(
    '-------------------------------' + NEW_LINE +
    wind1.getWeatherData().getValue() + NEW_LINE +
    wind1.getWeatherData().getEvent().getTime() + NEW_LINE +
    wind1.getWeatherData().getEvent().getPlace() + NEW_LINE +
    wind1.getWeatherData().getDataType().getType() + NEW_LINE +
    wind1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    wind1.getDirection()
);
console.log(NEW_LINE + '============== WIND OBJECT TEST 2 ===================>');
wind1.convertToMPH();
console.log(
    '----------------------------------------' + NEW_LINE +
    wind1.getWeatherData().getValue() + NEW_LINE +
    wind1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    wind1.getWeatherData().getDataType().getType()
);
wind1.convertToMS();
console.log(
    wind1.getWeatherData().getValue() + NEW_LINE +
    wind1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    wind1.getWeatherData().getDataType().getType()
);

function CloudCoverage(place, type, unit, value) {
    let state = {place: place, type: type, unit: unit, value: value};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherData = new WeatherData(state.value, event.getPlace(), dataType.getType(), dataType.getUnit());
    const getWeatherData = () => weatherData;
    const setWeatherData = (newWeatherData) => weatherData = new WeatherData(state.value, newWeatherData.getPlace(), newWeatherData.getType(), newWeatherData.getUnit());
    return {...weatherData, getWeatherData, setWeatherData}
}

console.log(NEW_LINE + '============== CLOUD COVERAGE TEST 1 ===================>');
const cloudCoverage1 = new CloudCoverage('Los Santos', 'area', 'M^2', 100);
console.log(
    cloudCoverage1.getWeatherData().getDataType().getType() + NEW_LINE +
    cloudCoverage1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    cloudCoverage1.getWeatherData().getEvent().getPlace() + NEW_LINE +
    cloudCoverage1.getWeatherData().getValue()
);
console.log(NEW_LINE + '============== CLOUD COVERAGE TEST 2 ===================>');
const event2 = new Event('San Diego');
const dataType2 = new DataType('sectors', 'km^2');
const weatherData2 = new WeatherData(40, event2.getPlace(), dataType2.getType(), dataType2.getUnit());
cloudCoverage1.setWeatherData(weatherData2);
console.log(
    cloudCoverage1.getWeatherData().getDataType().getType() + NEW_LINE +
    cloudCoverage1.getWeatherData().getDataType().getUnit() + NEW_LINE +
    cloudCoverage1.getWeatherData().getEvent().getPlace() + NEW_LINE +
    cloudCoverage1.getWeatherData().getValue()
);

function WeatherPrediction(unit, type, place, min, max) {
    let state = {unit: unit, type: type, place: place, min: min, max: max};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    const getMin = () => state.min;
    const setMin = (newMin) => state.min = newMin;
    const getMax = () => state.max;
    const getEvent = () => event;
    const setEvent = (newEvent) => event = newEvent;
    const setDataType = (newDataType) => dataType = newDataType;
    const getDataType = () => dataType;
    const setMax = (newMax) => state.max = newMax;
    const matches = (data) => (
        data.getValue() === ((state.min + state.max) / 2) &&
        data.getEvent().getTime() === event.getTime() &&
        data.getEvent().getPlace() === event.getPlace() &&
        data.getDataType().getType() === dataType.getType() &&
        data.getDataType().getUnit() === dataType.getUnit()
    );
    return {...event, ...dataType, getMin, getMax, setMin, setMax, matches, getEvent, getDataType, setEvent, setDataType};
}

console.log(NEW_LINE + '============== WEATHER PREDICTION TEST 1 ===================>');
const weatherData3 = new WeatherData(55, 'Toledo', 'speed', 'M/S');
const weatherPrediction1 = new WeatherPrediction('M/S', 'speed', 'Toledo', 10, 100);
console.log(
    weatherPrediction1.getEvent().getPlace() + NEW_LINE +
    weatherPrediction1.getEvent().getTime() + NEW_LINE +
    weatherPrediction1.getDataType().getType() + NEW_LINE +
    weatherPrediction1.getDataType().getUnit() + NEW_LINE +
    weatherPrediction1.getMax() + NEW_LINE +
    weatherPrediction1.getMin() + NEW_LINE +
    weatherPrediction1.matches(weatherData3)
);

function TemperaturePrediction(unit, type, place, min, max) {
    let state = {unit: unit, type: type, place: place, min: min, max: max};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherPrediction = new WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.min, state.max);
    const convertToF = () => {
        if (weatherPrediction.getDataType().getType() === CELSIUS_TYPE) {
            weatherPrediction.getDataType().setType(FAHRENHEIT_TYPE);
            weatherPrediction.setMin(weatherPrediction.getMin() * 1.8 + 32);
            weatherPrediction.setMax(weatherPrediction.getMax() * 1.8 + 32)
            weatherPrediction.getDataType().setUnit(FAHRENHEIT_UNIT);
        }
    }
    const convertToC = () => {
        if (weatherPrediction.getDataType().getType() === FAHRENHEIT_TYPE) {
            weatherPrediction.getDataType().setType(CELSIUS_TYPE);
            weatherPrediction.setMin((weatherPrediction.getMin() - 32) / 1.8);
            weatherPrediction.setMax((weatherPrediction.getMax() - 23) / 1.8);
            weatherPrediction.getDataType().setUnit(CELSIUS_UNIT);
        }
    }
    const getWeatherPrediction = () => weatherPrediction;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    return {...weatherPrediction, convertToC, convertToF, getWeatherPrediction, setWeatherPrediction};
}

console.log(NEW_LINE + '============== TEMPERATURE PREDICTION TEST 1 ===================>');
let temperaturePrediction1 = new TemperaturePrediction(CELSIUS_UNIT, CELSIUS_TYPE, 'Leipzig', 20, 40);
console.log(
    temperaturePrediction1.getDataType().getUnit() + NEW_LINE +
    temperaturePrediction1.getDataType().getType() + NEW_LINE +
    temperaturePrediction1.getPlace() + NEW_LINE +
    temperaturePrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    temperaturePrediction1.getWeatherPrediction().getMin() + NEW_LINE +
    temperaturePrediction1.getWeatherPrediction().matches(new WeatherData(30, 'Leipzig', CELSIUS_TYPE, CELSIUS_UNIT))
);

function PrecipitationPrediction(unit, type, place, max, min, expectedTypes) {
    let state = {unit: unit, type: type, place: place, max: max, min: min, expectedTypes: expectedTypes};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type);
    let weatherPrediction = new WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.min, state.max);
    const getExpectedTypes = () => new Array(state.expectedTypes);
    const setExpectedTypes = (newExpectedTypes) => state.expectedTypes = newExpectedTypes;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    const matches = (data) => (
        data.getValue() === ((weatherPrediction.getMin() + weatherPrediction.getMax()) / 2) &&
        data.getDataType().getType() === weatherPrediction.getDataType().getType() &&
        data.getDataType().getUnit() === weatherPrediction.getDataType().getUnit() &&
        data.getEvent().getTime() === weatherPrediction.getEvent().getTime() &&
        data.getEvent().getPlace() === weatherPrediction.getEvent().getPlace()
    );
    const convertToInches = () => {
        if (weatherPrediction.getDataType().getType() === 'MM') {
            weatherPrediction.getDataType().setUnit('Inches');
            weatherPrediction.setMin(Math.round(weatherPrediction1.getMin() / 25.4));
            weatherPrediction.setMax(Math.round(weatherPrediction1.getMax() / 25.4));
            weatherPrediction.getDataType().setType('IN');
        }
    };
    const convertToMM = () => {
        if (weatherPrediction.getDataType().getType() === 'IN') {
            weatherPrediction.getDataType().setUnit('MM');
            weatherPrediction.setMin(Math.round(weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax(Math.round(weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.getDataType().setType('Millimeter');
        }
    };
    return {...weatherPrediction, getExpectedTypes, setExpectedTypes, matches, convertToInches, convertToMM, getWeatherPrediction, setWeatherPrediction}
}

console.log(NEW_LINE + '============== PRECIPITATION PREDICTION TEST 1 ===================>');
const precipitationPrediction1 = new PrecipitationPrediction('Millimeter', 'MM', 'San Jose', 10, 100, ['rain', 'fog']);
console.log(
    precipitationPrediction1.getDataType().getUnit() + NEW_LINE +
    precipitationPrediction1.getDataType().getType() + NEW_LINE +
    precipitationPrediction1.getEvent().getPlace() + NEW_LINE +
    precipitationPrediction1.getMin() + NEW_LINE +
    precipitationPrediction1.getMax() + NEW_LINE +
    precipitationPrediction1.getExpectedTypes()
);
precipitationPrediction1.convertToInches();
console.log(
    precipitationPrediction1.getDataType().getUnit() + NEW_LINE +
    precipitationPrediction1.getDataType().getType() + NEW_LINE +
    precipitationPrediction1.getMin() + NEW_LINE +
    precipitationPrediction1.getMax() + NEW_LINE
);

function WindPrediction(unit, type, place, max, min, expectedDirections) {
    let state = {unit, type, place, max, min, expectedDirections: expectedDirections};
    let event = new Event(place);
    let dataType = new DataType(unit, type);
    let weatherPrediction = new WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.min, state.max);
    const getExpectedDirections = () => new Array(state.expectedDirections);
    const setExpectedTypes = (newExpectedTypes) => state.expectedTypes = newExpectedTypes;
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    const matches = (data) => (
        data.getValue() === ((weatherPrediction.getMin() + weatherPrediction.getMax()) / 2) &&
        data.getDataType().getType() === weatherPrediction.getDataType().getType() &&
        data.getDataType().getUnit() === weatherPrediction.getDataType().getUnit() &&
        data.getEvent().getTime() === weatherPrediction.getEvent().getTime()
    );
    const convertToMPH = () => {
        if (weatherPrediction.getDataType().getUnit() === MPS_UNIT) {
            weatherPrediction.getDataType().setUnit(MPH_UNIT);
            weatherPrediction.setMin(Math.round(weatherPrediction1.getMin() / 25.4));
            weatherPrediction.setMax(Math.round(weatherPrediction1.getMax() / 25.4));
            weatherPrediction.getDataType().setType(MPH_TYPE);
        }
    };
    const convertToMS = () => {
        if (weatherPrediction.getDataType().getUnit() === MPH_UNIT) {
            weatherPrediction.getDataType().setUnit(MPS_UNIT);
            weatherPrediction.setMin(Math.round(weatherPrediction.getMin() * 0.0393701));
            weatherPrediction.setMax(Math.round(weatherPrediction.getMax() * 0.0393701));
            weatherPrediction.getDataType().setType(MPS_TYPE);
        }
    };
    return {...weatherPrediction, getExpectedDirections, setExpectedTypes, matches, convertToMPH, convertToMS, getWeatherPrediction, setWeatherPrediction};
}

const windPrediction1 = new WindPrediction(MPH_UNIT, MPH_TYPE, 'Santorini', 100, 10, ['North', 'South', 'West']);
console.log(NEW_LINE + '============== WIND PREDICTION TEST 1 ===================>');
console.log(
    windPrediction1.getWeatherPrediction().getDataType().getUnit() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getDataType().getType() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getEvent().getPlace() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getEvent().getTime() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getMin() + NEW_LINE +
    windPrediction1.getExpectedDirections()
);
const weatherData4 = new WeatherData(55, 'Santorini', MPH_TYPE, MPH_UNIT);
console.log(windPrediction1.matches(weatherData4));
windPrediction1.convertToMS();
console.log(
    windPrediction1.getWeatherPrediction().getDataType().getUnit() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getDataType().getType() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    windPrediction1.getWeatherPrediction().getMin()
);

function CloudCoveragePrediction(unit, type, place, max, min) {
    let state = {unit, type, place, max, min};
    let event = new Event(state.place);
    let dataType = new DataType(state.unit, state.type)
    let weatherPrediction = new WeatherPrediction(dataType.getUnit(), dataType.getType(), event.getPlace(), state.min, state.max);
    const setWeatherPrediction = (newWeatherPrediction) => weatherPrediction = newWeatherPrediction;
    const getWeatherPrediction = () => weatherPrediction;
    return {...weatherPrediction, setWeatherPrediction, getWeatherPrediction};
}

console.log(NEW_LINE + '============== CLOUD COVERAGE PREDICTION TEST 1 ===================>');
const cloudCoveragePrediction1 = new CloudCoveragePrediction(MPH_UNIT, MPH_TYPE, 'Lisbon', 100, 20);
console.log(
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getUnit() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getType() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getTime() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getPlace() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMin()
);
cloudCoveragePrediction1.getWeatherPrediction().setMin(15.22);
cloudCoveragePrediction1.getWeatherPrediction().setMax(199.2);
cloudCoveragePrediction1.getWeatherPrediction().setEvent(Event('Alanya'));
cloudCoveragePrediction1.getWeatherPrediction().setDataType(DataType(MPS_UNIT, MPS_TYPE));
console.log(
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getUnit() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getType() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getTime() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getPlace() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMin()
);