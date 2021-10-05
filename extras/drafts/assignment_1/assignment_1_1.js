// global constants
const NEW_LINE = '\n';
const MM_UNIT = 'MM';
const MM_TYPE = 'Millimeters';
const IN_UNIT = 'IN';
const IN_TYPE = 'Inches';
const MPH_UNIT = 'MPH';
const MPH_TYPE = 'Miles per Hour';
const MPS_UNIT = 'MS';
const MPS_TYPE = 'Meters per Second';
const FAHRENHEIT_TYPE = 'Fahrenheit';
const FAHRENHEIT_UNIT = '*F';
const CELSIUS_TYPE = 'Celsius';
const CELSIUS_UNIT = '*C';


/**
 * @param date a string indicating the date of the event.
 * @param place a string indicating the place/location of the event.
 * @returns EventObject having the following methods:
 *                      getTime - returns current time,
 *                      getPlace - returns the place property,
 *                      setPlace(newPlace) - sets the place to the given place parameter (defaults to the previous valid value if given null || undefined),
 * @constructor the Event object constructor having 1 parameter, place (string).
 */
function Event(place, date) {
    let state = {place: place, date: date};
    const getTime = () => state.place.toLocaleString();
    const getPlace = () => state.place;
    const setDate = (newDate) => state.date = newDate ? new Date(newDate) : new Date(state.date);
    const getDate = () => new Date(state.date);
    const setPlace = (newPlace) => state.place = newPlace ? newPlace : state.place;
    return Object.assign({}, {getTime, getPlace, setPlace, setDate, getDate});
}

console.log('<====================================== EVENT OBJECT TEST ==================================================>');
const event1 = new Event('Santorini', '1940-09-01');
console.log(
    'Time:  ' + event1.getTime() + NEW_LINE +
    'Place: ' + event1.getPlace()
);
const event2 = new Event('Burgas', '1939-05-01');
console.log(
    'Time:  ' + event2.getTime() + NEW_LINE +
    'Place: ' + event2.getPlace()
);
event2.setPlace(null);
console.log(
    'Time:  ' + event2.getTime() + NEW_LINE +
    'Place: ' + event2.getPlace()
);
event2.setPlace(undefined);
console.log(
    'Time:  ' + event2.getTime() + NEW_LINE +
    'Place: ' + event2.getPlace()
);

/**
 * @param type a string indicating the dataType's type
 * @param unit a string indicating the dataType's unit
 * @returns DataTypeObject having the following methods:
 *                         setType(newType) - sets the type property to the given argument, defaults to the previous valid value if given null || undefined.
 *                         getType() - returns the type property,
 *                         setUnit(newUnit) - sets the unit property to the given argument, defaults to the previous value if given null || undefined,
 *                         getUnit() - returns the unit property
 * @constructor the DataType object constructor having 2 parameters, type and unit (string, string).
 */
function DataType(type, unit) {
    let state = {type: type, unit: unit};
    const setType = (newType) => state.type = newType ? newType : state.type;
    const getType = () => state.type;
    const setUnit = (newUnit) => state.unit = newUnit ? newUnit : state.unit;
    const getUnit = () => state.unit;
    return Object.assign({}, {setType, getType, setUnit, getUnit});
}

console.log('<====================================== DATA TYPE OBJECT TEST ==================================================>');
const dataType1 = new DataType(CELSIUS_TYPE, CELSIUS_UNIT);
console.log(
    dataType1.getUnit() + NEW_LINE +
    dataType1.getType() + NEW_LINE
);
dataType1.setType(FAHRENHEIT_TYPE);
dataType1.setUnit(FAHRENHEIT_UNIT);
console.log(
    dataType1.getUnit() + NEW_LINE +
    dataType1.getType() + NEW_LINE
);

function DateInterval(dateFrom, dateTo) {
    let state = {dateFrom: dateFrom, dateTo: dateTo};
    const getDateFrom = () => dateFrom;
    const setDateFrom = (dateFrom) => state.dateFrom = dateFrom ? new Date(dateFrom) : new Date(state.dateFrom);
    const getDateTo = () => dateTo;
    const setDateTo = (dateTo) => state.dateTo = dateTo ? new Date(dateTo) : new Date(state.dateTo);
    const contains = (date) => (state.dateFrom <= date <= state.dateTo);
    return Object.assign({}, {getDateFrom, setDateFrom, getDateTo, setDateTo, contains});
}

console.log('<====================================== DATA INTERVAL OBJECT TEST ==================================================>');
const dateInterval1 = new DateInterval(
    new Date(1980, 11, 11, 10, 30, 20),
    new Date(2021, 9, 14, 12, 21, 10));
const date1 = new Date(2021, 9, 14, 12, 21, 10);
console.log(
    dateInterval1.getDateTo() + NEW_LINE +
    dateInterval1.getDateFrom() + NEW_LINE +
    dateInterval1.contains(date1)
);
dateInterval1.setDateFrom('1950-10-02');
dateInterval1.setDateTo('1980-11-03');
const date2 = new Date(1960, 11, 3);
console.log(
    dateInterval1.getDateTo() + NEW_LINE +
    dateInterval1.getDateFrom() + NEW_LINE +
    dateInterval1.contains(date2)
);

function WeatherData(date, place, type, unit, value) {
    let state = {date: date, place: place, type: type, unit: unit, value: value};
    const getValue = () => state.value;
    const setValue = (newValue) => state.value = newValue ? newValue : state.value;
    return Object.assign({}, new Event(state.place, state.date), new DataType(state.type, state.unit), {getValue, setValue});
}

console.log('<====================================== WEATHER DATA OBJECT TEST ==================================================>');
const weatherData1 = new WeatherData('1940-03-02', 'Wroclaw', CELSIUS_TYPE, CELSIUS_UNIT, 100);
console.log(
    weatherData1.getValue() + NEW_LINE +
    weatherData1.getTime() + NEW_LINE +
    weatherData1.getDate() + NEW_LINE +
    weatherData1.getPlace() + NEW_LINE +
    weatherData1.getType() + NEW_LINE +
    weatherData1.getUnit() + NEW_LINE
);
weatherData1.setValue(9999);
weatherData1.setPlace('Dubrovnik');
weatherData1.setDate('1989-12-01');
weatherData1.setUnit(FAHRENHEIT_UNIT);
weatherData1.setType(FAHRENHEIT_TYPE);
console.log(
    weatherData1.getValue() + NEW_LINE +
    weatherData1.getTime() + NEW_LINE +
    weatherData1.getDate() + NEW_LINE +
    weatherData1.getPlace() + NEW_LINE +
    weatherData1.getType() + NEW_LINE +
    weatherData1.getUnit() + NEW_LINE
);

function Temperature(time, place, type, unit, value) {
    let state = {time: time, place: place, type: type, unit: unit, value: value};
    let weatherData = new WeatherData(state.time, state.place, state.type, state.unit, state.value)
    const convertToF = () => {
        if (weatherData.getType() === CELSIUS_TYPE) {
            weatherData.setType(FAHRENHEIT_TYPE);
            weatherData.setUnit(FAHRENHEIT_UNIT);
            weatherData.setValue((weatherData.getValue() * 9 / 5) + 32);
        }
    }
    const convertToC = () => {
        if (weatherData.getType() === FAHRENHEIT_TYPE) {
            weatherData.setType(CELSIUS_TYPE);
            weatherData.setUnit(CELSIUS_UNIT);
            weatherData.setValue((weatherData.getValue() - 32) * 5 / 9);
        }
    }
    return Object.assign({}, weatherData, {convertToF, convertToC});
}

console.log('<====================================== TEMPERATURE DATA OBJECT TEST ==================================================>');
const temperature1 = new Temperature(new Date('1939-01-02'), 'Lesbos', CELSIUS_TYPE, CELSIUS_UNIT, 25);
console.log(
    temperature1.getDate() + NEW_LINE +
    temperature1.getUnit() + NEW_LINE +
    temperature1.getPlace() + NEW_LINE +
    temperature1.getType() + NEW_LINE +
    temperature1.getValue() + NEW_LINE +
    temperature1.getTime()
);
temperature1.convertToF();
console.log(
    temperature1.getUnit() + NEW_LINE +
    temperature1.getType() + NEW_LINE +
    temperature1.getValue() + NEW_LINE
);
temperature1.convertToC();
console.log(
    temperature1.getUnit() + NEW_LINE +
    temperature1.getType() + NEW_LINE +
    temperature1.getValue() + NEW_LINE
);

function Precipitation(time, place, type, unit, value, precipitationType) {
    let state = {time: time, place: place, type: type, unit: unit, value: value, precipitationType: precipitationType};
    let weatherData = new WeatherData(state.time, state.place, state.type, state.unit, state.value);
    const getPrecipitationType = () => state.precipitationType;
    const setPrecipitationType = (newPrecipitationType) => state.precipitationType = newPrecipitationType ? newPrecipitationType : state.precipitationType;
    const convertToInches = () => {
        if (weatherData.getType() === MM_TYPE) {
            weatherData.setType(IN_TYPE);
            weatherData.setUnit(IN_UNIT);
            weatherData.setValue(weatherData.getValue() / 25.4);
        }
    }
    const convertToMM = () => {
        if (weatherData.getType() === IN_TYPE) {
            weatherData.setType(MM_TYPE);
            weatherData.setUnit(MM_UNIT);
            weatherData.setValue(weatherData.getValue() * 25.4);
        }
    }
    return Object.assign({}, weatherData, {getPrecipitationType, setPrecipitationType, convertToInches, convertToMM});
}

console.log('<====================================== PRECIPITATION OBJECT TEST ==================================================>');
const precipitation1 = new Precipitation(new Date('1999-10-11'), 'Manhattan', IN_TYPE, IN_UNIT, 100, 'rain');
console.log(
    precipitation1.getPrecipitationType() + NEW_LINE +
    precipitation1.getDate() + NEW_LINE +
    precipitation1.getValue() + NEW_LINE +
    precipitation1.getUnit() + NEW_LINE +
    precipitation1.getType() + NEW_LINE +
    precipitation1.getTime() + NEW_LINE +
    precipitation1.getPlace() + NEW_LINE
);
precipitation1.convertToMM();
console.log(
    precipitation1.getValue() + NEW_LINE +
    precipitation1.getUnit() + NEW_LINE +
    precipitation1.getType() + NEW_LINE
);
precipitation1.convertToInches();
console.log(
    precipitation1.getValue() + NEW_LINE +
    precipitation1.getUnit() + NEW_LINE +
    precipitation1.getType() + NEW_LINE
);

function Wind(time, place, type, unit, value, direction) {
    let state = {time: time, place: place, type: type, unit: unit, value: value, direction: direction};
    const weatherData = new WeatherData(new Date(time), state.place, state.type, state.unit, state.value);
    const getDirection = () => state.direction;
    const setDirection = (newDirection) => state.direction = newDirection ? newDirection : state.direction;
    const convertToMPH = () => {
        if (weatherData.getType() === MPS_UNIT) {
            weatherData.setType(MPH_TYPE);
            weatherData.setUnit(MPH_UNIT);
            weatherData.setValue(weatherData.getValue() * 2.237);
        }
    }
    const convertToMS = () => {
        if (weatherData.getType() === MPH_UNIT) {
            weatherData.setType(MPS_TYPE);
            weatherData.setUnit(MPS_UNIT);
            weatherData.setValue(weatherData.getValue() / 2.237);
        }
    }
    return Object.assign({}, weatherData, {getDirection, setDirection, convertToMS, convertToMPH});
}

console.log('<====================================== WIND OBJECT TEST ==================================================>');
const wind1 = new Wind('1911-11-22', 'Berlin', MPH_TYPE, MPH_UNIT, 100, 'North');
console.log(
    wind1.getDirection() + NEW_LINE +
    wind1.getType() + NEW_LINE +
    wind1.getValue() + NEW_LINE +
    wind1.getDate() + NEW_LINE +
    wind1.getUnit() + NEW_LINE +
    wind1.getPlace() + NEW_LINE +
    wind1.getTime() + NEW_LINE +
    wind1.getUnit()
);
wind1.setDate('1991-10-11')
wind1.setValue(3221);
wind1.setDirection('South');
wind1.setType(MM_TYPE);
wind1.setPlace('Jakarta');
wind1.setUnit(MM_UNIT);
console.log(
    wind1.getDirection() + NEW_LINE +
    wind1.getType() + NEW_LINE +
    wind1.getValue() + NEW_LINE +
    wind1.getDate() + NEW_LINE +
    wind1.getUnit() + NEW_LINE +
    wind1.getPlace() + NEW_LINE
);

function CloudCoverage(time, place, type, unit, value) {
    let state = {time: time, place: place, type: type, unit: unit, value: value};
    const weatherData = new WeatherData(state.time, state.place, state.type, state.unit, state.value);
    return Object.assign({}, weatherData);
}

console.log('<====================================== CLOUD COVERAGE OBJECT TEST ==================================================>');
const cloudCoverage1 = new CloudCoverage('1911-11-11', 'Stalingrad', MM_TYPE, MM_UNIT, 100);
console.log(
    cloudCoverage1.getValue() + NEW_LINE +
    cloudCoverage1.getDate() + NEW_LINE +
    cloudCoverage1.getUnit() + NEW_LINE +
    cloudCoverage1.getPlace() + NEW_LINE +
    cloudCoverage1.getTime() + NEW_LINE +
    cloudCoverage1.getType() + NEW_LINE
);
cloudCoverage1.setDate('1922-10-10');
cloudCoverage1.setPlace('Malmo <3');
cloudCoverage1.setValue(1000);
cloudCoverage1.setType(IN_TYPE);
cloudCoverage1.setUnit(IN_UNIT);

function WeatherHistory(weatherDataSet) {
    let state = {weatherDataSet: weatherDataSet};
    const forPlace = (place) => {
        let weatherHistoryOfPlace = [];
        state.weatherDataSet.forEach((element) => {
            if (element.getPlace() === place) {
                weatherHistoryOfPlace.push(element);
            }
        });
        return WeatherHistory(weatherHistoryOfPlace);
    }
    const forType = (type) => {
        let weatherHistoryOfType = [];
        state.weatherDataSet.forEach((element) => {
            if (element.getType() === type) {
                weatherHistoryOfType.push(element);
            }
        });
        return WeatherHistory(weatherHistoryOfType);
    };
    const forPeriod = (period) => {
        let weatherHistoryForPeriod = [];
        state.weatherDataSet.forEach((element) => {
                if (period.getDateFrom().getTime() <= element.getDate().getTime() &&
                    element.getDate().getTime() <= period.getDateTo().getTime())
                    weatherHistoryForPeriod.push(element);
            }
        );
        return WeatherHistory(weatherHistoryForPeriod);
    };
    const including = (weatherData) => {
        let weatherDataForComparison = [];
        state.weatherDataSet.forEach(element => {
            weatherData.forEach((comparisonElement => {
                if (Object.keys(element).length === Object.keys(comparisonElement).length
                    && Object.keys(element).every(p => element[p] === comparisonElement[p])) {
                    weatherDataForComparison.push(element);
                }
            }));
        });
        return WeatherHistory(weatherDataForComparison);
    };
    const convertToUsUnits = () => {
        state.weatherDataSet.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN_UNIT);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH_UNIT)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const convertToInternationalUnits = () => {
        state.weatherDataSet.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM_UNIT);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS_UNIT)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const lowestValue = () => state.weatherDataSet.reduce((previous, current) => previous.getValue() < current.getValue() ? previous : current);
    const getData = () => state.weatherDataSet;
    const setData = (weatherData) => state.weatherDataSet.concat(weatherData);
    return Object.assign({}, ...state.weatherDataSet, {forPlace, getData, setData, forType, forPeriod, lowestValue, including, convertToInternationalUnits, convertToUsUnits});
}

console.log('<==============================================================================================================================================>');
const date3 = new Date('2000-01-01');
const date4 = new Date('2004-02-02');
const dateInterval = new DateInterval(date3, date4);
const weatherData4 = new WeatherData(new Date('2002-02-01'), 'Berlin', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherData5 = new WeatherData(new Date('2003-02-01'), 'Prague', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherData6 = new WeatherData(new Date('1980-02-01'), 'Berlin', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherHistory1 = new WeatherHistory([weatherData4, weatherData5, weatherData6]);
weatherHistory1.setData(new WeatherData(new Date('1990-01-01'), 'Chicago', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 300));
weatherHistory1.forPlace('Berlin').getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
const weatherData7 = new WeatherData(new Date('2003-02-01'), 'Manhattan', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherData8 = new WeatherData(new Date('1980-02-01'), 'Chicago', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherData9 = new WeatherData(new Date('2002-02-01'), 'Detroit', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherHistory2 = new WeatherHistory([weatherData7, weatherData8, weatherData9]);
weatherHistory2.forType(FAHRENHEIT_TYPE).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.forPeriod(dateInterval).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.forPeriod(dateInterval).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.convertToInternationalUnits();
weatherHistory2.forPeriod(dateInterval).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.convertToUsUnits();
weatherHistory2.forPeriod(dateInterval).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.including([weatherData8]);
weatherHistory2.forPlace('Chicago').getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
console.log(
    weatherHistory2.lowestValue().getValue() + NEW_LINE +
    weatherHistory2.lowestValue().getTime() + NEW_LINE +
    weatherHistory2.lowestValue().getDate() + NEW_LINE +
    weatherHistory2.lowestValue().getUnit() + NEW_LINE +
    weatherHistory2.lowestValue().getPlace() + NEW_LINE
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
const weatherData10 = new WeatherData(55, 'Santorini', MPH_TYPE, MPH_UNIT);
console.log(windPrediction1.matches(weatherData10));
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
cloudCoveragePrediction1.getWeatherPrediction().setEvent(new Event('Alanya'));
cloudCoveragePrediction1.getWeatherPrediction().setDataType(new DataType(MPS_UNIT, MPS_TYPE));
console.log(
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getUnit() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getDataType().getType() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getTime() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getEvent().getPlace() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMax() + NEW_LINE +
    cloudCoveragePrediction1.getWeatherPrediction().getMin()
);


function WeatherForecast(weatherPredictionSet) {
    let state = {weatherPredictionSet: weatherPredictionSet};
    const forPlace = (place) => {
        let weatherForecastOfPlace = [];
        state.weatherPredictionSet.forEach((element) => {
            if (element.getPlace() === place) {
                weatherForecastOfPlace.push(element);
            }
        });
        return WeatherForecast(weatherForecastOfPlace);
    }
    const forType = (type) => {
        let weatherHistoryOfType = [];
        state.weatherPredictionSet.forEach((element) => {
            if (element.getType() === type) {
                weatherHistoryOfType.push(element);
            }
        });
        return WeatherForecast(weatherHistoryOfType);
    };
    const forPeriod = (period) => {
        let weatherForecastForPeriod = [];
        state.weatherPredictionSet.forEach((element) => {
                if (period.getDateFrom().getTime() <= element.getDate().getTime() &&
                    element.getDate().getTime() <= period.getDateTo().getTime())
                    weatherForecastForPeriod.push(element);
            }
        );
        return WeatherForecast(weatherForecastForPeriod);
    };
    const including = (forecastData) => {
        let forecastDataForComparison = [];
        state.weatherPredictionSet.forEach(element => {
            forecastData.forEach((comparisonElement => {
                if (Object.keys(element).length === Object.keys(comparisonElement).length
                    && Object.keys(element).every(p => element[p] === comparisonElement[p])) {
                    forecastDataForComparison.push(element);
                }
            }));
        });
        return WeatherForecast(forecastDataForComparison);
    };
    const convertToUsUnits = () => {
        state.weatherPredictionSet.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN_UNIT);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH_UNIT)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const convertToInternationalUnits = () => {
        state.weatherPredictionSet.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM_UNIT);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS_UNIT)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const getAverageMinValue = () => {
        let avgMinNumber = 0;
        state.weatherPredictionSet.forEach(element => {
            if (element.getMin() !== undefined) {
                avgMinNumber += element.getMin();
            }
            return avgMinNumber / state.weatherPredictionSet.length;
        });
    }
    const getAverageMaxValue = () => {
        let avgMaxNumber = 0;
        state.weatherPredictionSet.forEach(element => {
            if (element.getMax() !== undefined) {
                avgMaxNumber += element.getMax();
            }
            return avgMaxNumber / state.weatherPredictionSet.length;
        });
    };
    const getPredictions = () => state.weatherPredictionSet;
    const setData = (forecastData) => state.weatherDataSet.concat(forecastData);
    return Object.assign({}, ...state.weatherDataSet, {forPlace, getPredictions, setData, forType, forPeriod, including, convertToInternationalUnits, convertToUsUnits});
}

console.log('<==============================================================================================================================================>');
const date11 = new Date('2000-01-01');
const date12 = new Date('2004-02-02');
const dateInterval4 = new DateInterval(date11, date12);
const weatherData_4 = new WeatherData(new Date('2002-02-01'), 'Berlin', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherData_5 = new WeatherData(new Date('2003-02-01'), 'Prague', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherData_6 = new WeatherData(new Date('1980-02-01'), 'Berlin', CELSIUS_TYPE, CELSIUS_UNIT, 100);
const weatherHistory_1 = new WeatherHistory([weatherData_4, weatherData_5, weatherData_6]);
weatherHistory_1.setData(new WeatherData(new Date('1990-01-01'), 'Chicago', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 300));
weatherHistory_1.forPlace('Berlin').getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
const weatherData_7 = new WeatherData(new Date('2003-02-01'), 'Manhattan', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherData_8 = new WeatherData(new Date('1980-02-01'), 'Chicago', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherData_9 = new WeatherData(new Date('2002-02-01'), 'Detroit', FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, 100);
const weatherHistory_2 = new WeatherHistory([weatherData_7, weatherData_8, weatherData_9]);
weatherHistory_2.forType(FAHRENHEIT_TYPE).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.forPeriod(dateInterval4).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.forPeriod(dateInterval4).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.convertToInternationalUnits();
weatherHistory2.forPeriod(dateInterval4).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.convertToUsUnits();
weatherHistory2.forPeriod(dateInterval4).getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
weatherHistory2.including([weatherData8]);
weatherHistory2.forPlace('Chicago').getData().forEach(element => console.log(
        element.getTime() + NEW_LINE +
        element.getType() + NEW_LINE +
        element.getDate() + NEW_LINE +
        element.getValue() + NEW_LINE +
        element.getUnit() + NEW_LINE +
        element.getPlace() + NEW_LINE +
        element.getUnit() + NEW_LINE
    )
);
console.log('<==============================================================================================================================================>');
console.log(
    weatherHistory2.lowestValue().getValue() + NEW_LINE +
    weatherHistory2.lowestValue().getTime() + NEW_LINE +
    weatherHistory2.lowestValue().getDate() + NEW_LINE +
    weatherHistory2.lowestValue().getUnit() + NEW_LINE +
    weatherHistory2.lowestValue().getPlace() + NEW_LINE
);