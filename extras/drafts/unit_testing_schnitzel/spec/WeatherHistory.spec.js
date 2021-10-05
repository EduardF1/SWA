const {WeatherHistory} = require('../src/WeatherHistory');
const {DateInterval} = require('../../../../assignments/assignment_1/src/factories/DateInterval');
const {WeatherData} = require('../../../../assignments/assignment_1/src/factories/WeatherData');

const {START_DATE, END_DATE, END_DATE_2, START_DATE_2, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE, CELSIUS_UNIT, CELSIUS_TYPE, PLACES} = require('../../../../Constants');

describe('Weather History', () => {
    // Setup
    const date1 = new Date(START_DATE);
    const date2 = new Date(END_DATE);
    const date3 = new Date(START_DATE_2);
    const date4 = new Date(END_DATE_2);
    const dateInterval1 =  DateInterval(date1, date2);
    const dateInterval2 =  DateInterval(date3, date4);
    const weatherData4 =  WeatherData(PLACES[3], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, 10);
    const weatherData5 =  WeatherData(PLACES[4], new Date(START_DATE_2), CELSIUS_TYPE, CELSIUS_UNIT, 20);
    const weatherData6 =  WeatherData(PLACES[5], new Date(END_DATE), CELSIUS_TYPE, CELSIUS_UNIT, 30);
    const weatherHistory1 =  WeatherHistory([weatherData4, weatherData5, weatherData6]);

    let weatherData1 =  WeatherHistory();
    describe(`When it has been initialized with the values`, () => {
        test('it should be created', () => {
            // Assert
            expect(weatherHistory1).toBeDefined();
        });
        test(`it should have the minimum value of ${weatherData4.getValue()}`, ()=> {
           // Assert
           expect(weatherHistory1.lowestValue()).toEqual(weatherData4.getValue());
        });
        test(`it should have a length of ${weatherHistory1.getData().length}`, ()=> {
           // Assert
           expect(weatherHistory1.getData().length).toEqual(3);
        });
    });
});