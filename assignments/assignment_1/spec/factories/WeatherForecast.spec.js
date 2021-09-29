const {WeatherForecast} = require('../../src/factories/WeatherForecast');
const {
    PLACES,
    START_DATE,
    END_DATE,
    START_DATE_2,
    CELSIUS_TYPE,
    CELSIUS_UNIT,
    FAHRENHEIT_TYPE,
    FAHRENHEIT_UNIT,
    END_DATE_2,
    EMPTY_STRING,
    VALUES
} = require("../../../../Constants");
const {DateInterval} = require("../../src/factories/DateInterval");
const {WeatherData} = require("../../src/factories/WeatherData");

describe("Weather Forecast", () => {
    // Setup
    const date1 = new Date(START_DATE);
    const date2 = new Date(END_DATE);
    const dateInterval1 = DateInterval(date1, date2);
    const dateInterval2 = DateInterval(new Date(START_DATE_2), new Date(END_DATE_2));
    const weatherData4 = WeatherData({place: PLACES[3], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[3]});
    const weatherData5 = WeatherData({place: PLACES[4], time: new Date(START_DATE_2), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[4]});
    const weatherData6 = WeatherData({place: PLACES[5], time: new Date(END_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[6]});
    const weatherForecast = WeatherForecast([weatherData4, weatherData5, weatherData6], PLACES[4], CELSIUS_TYPE, dateInterval1);
    describe(`When it has been initialized.`, () => {
        test(`it should have a size of ${weatherForecast.getSize()}`, () => {
            // Assert
            expect(weatherForecast.getSize()).toEqual(3);
        });
        test(`it should have the type filter set to ${weatherForecast.getTypeFilter()}`, () => {
            // Assert
            expect(weatherForecast.getTypeFilter()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the place filter set to ${weatherForecast.getPlaceFilter()}`, () => {
            // Assert
            expect(weatherForecast.getPlaceFilter()).toEqual(PLACES[4]);
        });
        test(`it should have the period filter set to ${weatherForecast.getPeriodFilter()}`, () => {
            // Assert
            expect(weatherForecast.getPeriodFilter()).toEqual(dateInterval1);
        });
    });
    describe(`After it has been initialized`, () => {
        test(`it should be possible to add data`, () => {
            //Arrange
            const weatherData99 = WeatherData(PLACES[6], END_DATE, CELSIUS_TYPE, CELSIUS_UNIT, VALUES[8]);
            // Act
            weatherForecast.add(weatherData99);
            // Assert
            expect(weatherForecast.getSize()).toEqual(4);
        });
        test(`it should be possible to change the place filter to ${PLACES[2]}`, () => {
            //Act
            weatherForecast.setPlaceFilter(PLACES[2]);
            // Assert
            expect(weatherForecast.getPlaceFilter()).toEqual(PLACES[2]);
        });
        test(`it should be possible to change the type filter to ${FAHRENHEIT_TYPE}`, () => {
            //Act
            weatherForecast.setTypeFilter(FAHRENHEIT_TYPE);
            // Assert
            expect(weatherForecast.getTypeFilter()).toEqual(FAHRENHEIT_TYPE);
        });
        test(`it should be possible to change the period filter to ${dateInterval2}`, () => {
            //Act
            weatherForecast.setPeriodFilter(dateInterval2);
            // Assert
            expect(weatherForecast.getPeriodFilter()).toEqual(dateInterval2);
        });
        test(`it should be possible to clear all filters`, () => {
            // Act
            weatherForecast.clearPeriodFilter();
            weatherForecast.clearTypeFilter();
            weatherForecast.clearPlaceFilter();
            // Assert
            expect(weatherForecast.getTypeFilter()).toEqual(EMPTY_STRING);
            expect(weatherForecast.getPlaceFilter()).toEqual(EMPTY_STRING);
            expect(weatherForecast.getPeriodFilter()).toEqual(EMPTY_STRING);
        });

        describe(`it should be possible to convert all values to US units`, () => {
            // Act
            weatherForecast.convertToUsUnits();
            // Assert
            test.each(weatherForecast.getData())(
                '.getType()',
                (element) => {
                    expect(element.getType()).toBe(FAHRENHEIT_TYPE);
                },
            );
            test.each(weatherForecast.getData())(
                '.getType()',
                (element) => {
                    expect(element.getUnit()).toBe(FAHRENHEIT_UNIT);
                },
            );
            let index;
            let testUtils = [[68, 77, 86], index = 0];
            test.each(weatherForecast.getData())(
                '.getValue()',
                (element) => {
                    expect(element.getValue()).toBe(testUtils[0][index++]);
                },
            );
        });

        describe('and given a new set of weather data', () => {
            const weatherData4 = WeatherData({place: PLACES[3], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[2]});
            const weatherData5 = WeatherData({place: PLACES[4], time: new Date(START_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[4]});
            const weatherData6 = WeatherData({place: PLACES[5], time: new Date(END_DATE), type: CELSIUS_TYPE, unit: CELSIUS_UNIT, value: VALUES[8]});
            const weatherData7 = WeatherData({place: PLACES[4], time: new Date(END_DATE), type: FAHRENHEIT_TYPE, unit: FAHRENHEIT_UNIT, value: VALUES[4]});
            let weatherHistory2 = WeatherForecast([weatherData4, weatherData5, weatherData6, weatherData7], PLACES[4], CELSIUS_TYPE, DateInterval(new Date(START_DATE), new Date(END_DATE)));
            test('it should be possible to get filtered data', () => {
                // Assert
                expect(weatherHistory2.getFilteredPredictions().length).toEqual(1);
            });
        });
    });
})