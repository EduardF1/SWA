const {WeatherHistory} = require('../../src/factories/WeatherHistory');
const {PLACES, START_DATE, END_DATE, START_DATE_2, CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, END_DATE_2, EMPTY_STRING} = require("../../../../Constants");
const {DateInterval} = require("../../src/factories/DateInterval");
const {WeatherData} = require("../../src/factories/WeatherData");

describe("Weather History", () => {
    // Setup
    const date1 = new Date(START_DATE);
    const date2 = new Date(END_DATE);
    const dateInterval1 = DateInterval(date1, date2);
    const dateInterval2 = DateInterval(new Date(START_DATE_2), new Date(END_DATE_2));
    const weatherData4 = WeatherData({place: PLACES[3], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 15});
    const weatherData5 = WeatherData({place: PLACES[4], time: new Date(START_DATE_2), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 25});
    const weatherData6 = WeatherData({place: PLACES[5], time: new Date(END_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 35});
    const weatherHistory = WeatherHistory([weatherData4, weatherData5, weatherData6], PLACES[4], CELSIUS_TYPE, dateInterval1);
    describe(`When it has been initialized.`, () => {
        test(`it should have a size of ${weatherHistory.getSize()}`, () => {
            // Assert
            expect(weatherHistory.getSize()).toEqual(3);
        });
        test(`it should have the type filter set to ${weatherHistory.getTypeFilter()}`, () => {
            // Assert
            expect(weatherHistory.getTypeFilter()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the place filter set to ${weatherHistory.getPlaceFilter()}`, () => {
            // Assert
            expect(weatherHistory.getPlaceFilter()).toEqual(PLACES[4]);
        });
        test(`it should have the period filter set to ${weatherHistory.getPeriodFilter()}`, () => {
            // Assert
            expect(weatherHistory.getPeriodFilter()).toEqual(dateInterval1);
        });
    });
    describe(`After it has been initialized`, () => {
        test(`it should be possible to add data`, () => {
            //Arrange
            const weatherData99 = WeatherData(PLACES[6], END_DATE, CELSIUS_TYPE, CELSIUS_UNIT, 50);
            // Act
            weatherHistory.add(weatherData99);
            // Assert
            expect(weatherHistory.getSize()).toEqual(4);
        });
        test(`it should be possible to change the place filter to ${PLACES[2]}`, () => {
            //Act
            weatherHistory.setPlaceFilter(PLACES[2]);
            // Assert
            expect(weatherHistory.getPlaceFilter()).toEqual(PLACES[2]);
        });
        test(`it should be possible to change the type filter to ${FAHRENHEIT_TYPE}`, () => {
            //Act
            weatherHistory.setTypeFilter(FAHRENHEIT_TYPE);
            // Assert
            expect(weatherHistory.getTypeFilter()).toEqual(FAHRENHEIT_TYPE);
        });
        test(`it should be possible to change the period filter to ${dateInterval2}`, () => {
            //Act
            weatherHistory.setPeriodFilter(dateInterval2);
            // Assert
            expect(weatherHistory.getPeriodFilter()).toEqual(dateInterval2);
        });
        test(`it should be possible to clear all filters`, () => {
            // Act
            weatherHistory.clearPeriodFilter();
            weatherHistory.clearTypeFilter();
            weatherHistory.clearPlaceFilter();
            // Assert
            expect(weatherHistory.getTypeFilter()).toEqual(EMPTY_STRING);
            expect(weatherHistory.getPlaceFilter()).toEqual(EMPTY_STRING);
            expect(weatherHistory.getPeriodFilter()).toEqual(EMPTY_STRING);
        });

        describe(`it should be possible to convert all values to US units`, () => {
            // Act
            weatherHistory.convertToUsUnits();
            // Assert
            test.each(weatherHistory.getData())(
                '.getType()',
                (element) => {
                    expect(element.getType()).toBe(FAHRENHEIT_TYPE);
                },
            );
            test.each(weatherHistory.getData())(
                '.getType()',
                (element) => {
                    expect(element.getUnit()).toBe(FAHRENHEIT_UNIT);
                },
            );
            let index;
            let testUtils = [[59, 77, 95], index = 0];
            test.each(weatherHistory.getData())(
                '.getValue()',
                (element) => {
                    expect(element.getValue()).toBe(testUtils[0][index++]);
                },
            );
        });

        describe('and given a new set of weather data', () => {
            const weatherData4 = WeatherData({place: PLACES[3], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 15});
            const weatherData5 = WeatherData({place: PLACES[4], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 25});
            const weatherData6 = WeatherData({place: PLACES[5], time: new Date(END_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: 35});
            const weatherData7 = WeatherData({place: PLACES[4], time: new Date(END_DATE), type: FAHRENHEIT_TYPE, unit: FAHRENHEIT_UNIT, value: 25});
            let weatherHistory2 = WeatherHistory([weatherData4, weatherData5, weatherData6, weatherData7], PLACES[4], CELSIUS_TYPE, DateInterval(new Date(START_DATE), new Date(END_DATE)));
            test('it should be possible to get filtered data', () => {
                // Assert
                expect(weatherHistory2.getFilteredData().length).toEqual(1);
            });
        });
    });
});