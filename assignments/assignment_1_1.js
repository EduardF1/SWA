// global constants
const NEW_LINE = '\n';
const MM = 'MM';
const MM_TYPE = 'Millimeters';
const IN = 'IN';
const IN_TYPE = 'Inches';
const MPH = 'MPH';
const MPH_TYPE = 'Miles per Hour';
const MPS = 'MS';
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
    const getTime = () => date.toLocaleString();
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
            weatherData.setUnit(IN);
            weatherData.setValue(weatherData.getValue() / 25.4);
        }
    }
    const convertToMM = () => {
        if (weatherData.getType() === IN_TYPE) {
            weatherData.setType(MM_TYPE);
            weatherData.setUnit(MM);
            weatherData.setValue(weatherData.getValue() * 25.4);
        }
    }
    return Object.assign({}, weatherData, {getPrecipitationType, setPrecipitationType, convertToInches, convertToMM});
}

console.log('<====================================== PRECIPITATION OBJECT TEST ==================================================>');
const precipitation1 = new Precipitation(new Date('1999-10-11'), 'Manhattan', IN_TYPE, IN, 100, 'rain');
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
        if (weatherData.getType() === MPS) {
            weatherData.setType(MPH_TYPE);
            weatherData.setUnit(MPH);
            weatherData.setValue(weatherData.getValue() * 2.237);
        }
    }
    const convertToMS = () => {
        if (weatherData.getType() === MPH) {
            weatherData.setType(MPS_TYPE);
            weatherData.setUnit(MPS);
            weatherData.setValue(weatherData.getValue() / 2.237);
        }
    }
    return Object.assign({}, weatherData, {getDirection, setDirection, convertToMS, convertToMPH});
}

console.log('<====================================== WIND OBJECT TEST ==================================================>');
const wind1 = new Wind('1911-11-22', 'Berlin', MPH_TYPE, MPH, 100, 'North');
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
wind1.setUnit(MM);
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
const cloudCoverage1 = new CloudCoverage('1911-11-11', 'Stalingrad', MM_TYPE, MM, 100);
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
cloudCoverage1.setUnit(IN);

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
                    element.setUnit(IN);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH)
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
                    element.setUnit(MM);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS)
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
