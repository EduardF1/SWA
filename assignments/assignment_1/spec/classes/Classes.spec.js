const {
    PLACES,
    CELSIUS_TYPE,
    CELSIUS_UNIT,
    FAHRENHEIT_TYPE,
    FAHRENHEIT_UNIT,
    START_DATE,
    END_DATE,
    END_DATE_2,
    START_DATE_2,
    VALUES, EMPTY_STRING
} = require('../../../../Constants');

const {Event} = require('../../src/classes/Event');
const {DataType} = require('../../src/classes/DataType');
const {DateInterval} = require('../../src/classes/DateInterval');
const {WeatherData} = require('../../src/classes/WeatherData');
const {Temperature} = require('../../src/classes/Temperature');
const {WeatherHistory} = require("../../src/factories/WeatherHistory");

// Suites covering the class implementations
describe('Event', () => {
    // Arrange
    let event = new Event(PLACES[0], new Date(START_DATE));

    it('should be initialized', () => {
        // Assert
        expect(event).toBeDefined();
    });

    it(`should have the place set to ${PLACES[0]}`, () => {
        // Assert
        expect(event.getPlace()).toEqual(PLACES[0]);
    });

    it(`should have the date set to ${START_DATE}`, () => {
        // Assert
        expect(event.getTime()).toEqual(new Date(START_DATE));
    });

    it('should be possible to change the place', () => {
        // Act
        event.setPlace(PLACES[1]);
        // Assert
        expect(event.getPlace()).toEqual(PLACES[1]);
    });

    it(`should be possible to change the time to ${END_DATE_2}`, () => {
        // Act
        event.setTime(new Date(END_DATE_2));
        // Assert
        expect(event.getTime()).toEqual(new Date(END_DATE_2));
    });
});

describe('Data Type', () => {
    // Arrange
    let dataType = new DataType(CELSIUS_TYPE, CELSIUS_UNIT);

    it('should be initialized', () => {
        // Assert
        expect(dataType).toBeDefined();
    });

    it(`should have the type set to ${CELSIUS_TYPE}`, () => {
        // Assert
        expect(dataType.getType()).toEqual(CELSIUS_TYPE);
    });

    it(`should have the unit set to ${CELSIUS_UNIT}`, () => {
        // Assert
        expect(dataType.getUnit()).toEqual(CELSIUS_UNIT);
    });

    it('should be possible to change the unit', () => {
        // Act
        dataType.setUnit(FAHRENHEIT_UNIT);
        // Assert
        expect(dataType.getUnit()).toEqual(FAHRENHEIT_UNIT);
    });

    it('should be possible to change the unit', () => {
        // Act
        dataType.setType(FAHRENHEIT_TYPE);
        // Assert
        expect(dataType.getType()).toEqual(FAHRENHEIT_TYPE);
    });
});

describe('Date Interval', () => {
    // Arrange
    let dateInterval1 = new DateInterval(new Date(START_DATE), new Date(END_DATE))

    it('should be initialized', () => {
        // Assert
        expect(dateInterval1).toBeDefined();
    });

    it(`should have from set to ${START_DATE}`, () => {
        // Assert
        expect(dateInterval1.getFrom()).toEqual(new Date(START_DATE));
    });

    it(`should have to set to ${END_DATE}`, () => {
        // Assert
        expect(dateInterval1.getTo()).toEqual(new Date(END_DATE));
    });

    it(`should be possible to change from to ${START_DATE_2}`, () => {
        // Act
        dateInterval1.setFrom(START_DATE_2);
        // Assert
        expect(dateInterval1.getFrom()).toEqual(START_DATE_2);
    });

    it(`should be possible to change to to ${END_DATE_2}`, () => {
        // Act
        dateInterval1.setTo(END_DATE_2);
        // Assert
        expect(dateInterval1.getTo()).toEqual(END_DATE_2);
    });
});

describe('Weather Data', () => {
    // Arrange
    let weatherData = new WeatherData(PLACES[0], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, VALUES[0]);

    it('should be initialized', () => {
        // Assert
        expect(weatherData).toBeDefined();
    });

    it(`should have the place set to ${PLACES[0]}`, () => {
        // Assert
        expect(weatherData.getPlace()).toEqual(PLACES[0]);
    });

    it(`should have time set to ${START_DATE}`, () => {
        // Assert
        expect(weatherData.getTime()).toEqual(new Date(START_DATE));
    });

    it(`should have the type set to ${CELSIUS_TYPE}`, () => {
        // Assert
        expect(weatherData.getType()).toEqual(CELSIUS_TYPE);
    });

    it(`should have the unit set to ${CELSIUS_UNIT}`, () => {
        // Assert
        expect(weatherData.getUnit()).toEqual(CELSIUS_UNIT);
    });

    it(`should have the value set to ${VALUES[0]}`, () => {
        // Assert
        expect(weatherData.getValue()).toEqual(VALUES[0]);
    });

    it(`should be possible to set the place to ${PLACES[1]}`, () => {
        // Act
        weatherData.setPlace(PLACES[1]);
        // Assert
        expect(weatherData.getPlace()).toEqual(PLACES[1]);
    });

    it(`should be possible to set the time to ${START_DATE_2}`, () => {
        // Act
        weatherData.setTime(START_DATE_2);
        // Assert
        expect(weatherData.getTime()).toEqual(new Date(START_DATE_2).toISOString().slice(0,10));
    });

    it(`should be possible to set the type to ${FAHRENHEIT_TYPE}`, () => {
        // Act
        weatherData.setType(FAHRENHEIT_TYPE);
        // Assert
        expect(weatherData.getType()).toEqual(FAHRENHEIT_TYPE);
    });

    it(`should have the unit set to ${FAHRENHEIT_UNIT}`, () => {
        // Act
        weatherData.setUnit(FAHRENHEIT_UNIT);
        // Assert
        expect(weatherData.getUnit()).toEqual(FAHRENHEIT_UNIT);
    });

    it(`should be possible to set the value to ${VALUES[1]}`, () => {
        // Act
        weatherData.setValue(VALUES[1]);
        // Assert
        expect(weatherData.getValue()).toEqual(VALUES[1]);
    });
});

// Arrange
let temperature1 = new Temperature(PLACES[2], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, VALUES[3]);

describe(`When it has been initialized with values ${temperature1.getTime()}, ${temperature1.getPlace()}` +
    `, ${temperature1.getUnit()}, ${temperature1.getType()}, ${temperature1.getValue()}.`, () => {
    test("it should be created", () => {
        // Assert
        expect(temperature1).toBeDefined();
    });
    test(`it should have the place set to ${temperature1.getPlace()}`, () => {
        // Assert
        expect(temperature1.getPlace()).toEqual(PLACES[2]);
    });
    test(`it should have the time set to ${temperature1.getTime()}`, () => {
        // Assert
        expect(temperature1.getTime()).toEqual(new Date(START_DATE));
    });
    test(`it should have the type set to ${temperature1.getType()}`, () => {
        // Assert
        expect(temperature1.getType()).toEqual(CELSIUS_TYPE);
    });
    test(`it should have the unit set to ${temperature1.getUnit()}`, () => {
        // Assert
        expect(temperature1.getUnit()).toEqual(CELSIUS_UNIT);
    });
    test(`it should have the value set to ${temperature1.getValue()}`, () => {
        // Assert
        expect(temperature1.getValue()).toEqual(VALUES[3]);
    });
});

describe(`After it has been initialized with the values ${temperature1.getTime()}, ${temperature1.getPlace()}, ` +
    `${temperature1.getValue()}, ${temperature1.getUnit()}, ${temperature1.getType()}.`, () => {
    test(`it should be possible to convert the values from ${temperature1.getType()} to ${FAHRENHEIT_TYPE}`, () => {
        // Act
        temperature1.convertToF();
        // Assert
        expect(temperature1.getType()).toEqual(FAHRENHEIT_TYPE);
        expect(temperature1.getUnit()).toEqual(FAHRENHEIT_UNIT);
        expect(temperature1.getValue()).toEqual(68);
    });
    test(`it should be possible to convert the values from ${temperature1.getType()} to ${CELSIUS_TYPE}`, () => {
        // Act
        temperature1.convertToC();
        // Assert
        expect(temperature1.getType()).toEqual(CELSIUS_TYPE);
        expect(temperature1.getUnit()).toEqual(CELSIUS_UNIT);
        expect(temperature1.getValue()).toEqual(20);
    });
});

describe("Weather History", () => {
    // Setup
    const date1 = new Date(START_DATE);
    const date2 = new Date(END_DATE);
    const dateInterval1 = new DateInterval(date1, date2);
    const dateInterval2 = new DateInterval(new Date(START_DATE_2), new Date(END_DATE_2));
    const weatherData4 = new WeatherData(PLACES[3],  new Date(START_DATE), CELSIUS_TYPE,  CELSIUS_UNIT,  15);
    const weatherData5 = new WeatherData( PLACES[4],  new Date(START_DATE_2), CELSIUS_TYPE,  CELSIUS_UNIT, 25);
    const weatherData6 = new WeatherData( PLACES[5],  new Date(END_DATE),  CELSIUS_TYPE,  CELSIUS_UNIT,  35);
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
            const weatherData99 = new WeatherData(PLACES[6], END_DATE, CELSIUS_TYPE, CELSIUS_UNIT, VALUES[8]);
            // Act
            weatherHistory.add(weatherData99);
            // Assert
            expect(weatherHistory.getSize()).toEqual(VALUES[11]);
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
            const weatherData4 = new WeatherData( PLACES[3],  new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT,  15);
            const weatherData5 = new WeatherData(PLACES[4], new Date(START_DATE), CELSIUS_TYPE,CELSIUS_UNIT,  25);
            const weatherData6 = new WeatherData(PLACES[5], new Date(END_DATE), CELSIUS_TYPE,CELSIUS_UNIT,  35);
            const weatherData7 = new WeatherData(PLACES[4], new Date(END_DATE), FAHRENHEIT_TYPE,FAHRENHEIT_UNIT, 25);
            let weatherHistory2 = WeatherHistory([weatherData4, weatherData5, weatherData6, weatherData7], PLACES[4], CELSIUS_TYPE, new DateInterval(new Date(START_DATE), new Date(END_DATE)));
            test('it should be possible to get filtered data', () => {
                // Assert
                expect(weatherHistory2.getFilteredData().length).toEqual(1);
            });
        });
    });
})