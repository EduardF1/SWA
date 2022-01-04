const {WeatherData} = require('../../src/factories/WeatherData');
const {START_DATE, START_DATE_2, FAHRENHEIT_UNIT, FAHRENHEIT_TYPE, CELSIUS_UNIT, CELSIUS_TYPE, PLACES, VALUES} = require('../../../../Constants');

describe('Weather Data', () => {
    // Setup
    let weatherData1 = new WeatherData({place:PLACES[0], time:new Date(START_DATE), type:CELSIUS_TYPE,unit: CELSIUS_UNIT, value:VALUES[9]});
    describe(`When it has been initialized with the values ${weatherData1.getTime()}, ${weatherData1.getPlace()}, ` +
        `${weatherData1.getValue()}, ${weatherData1.getUnit()}, ${weatherData1.getType()}`, () => {
        test('it should be created', () => {
            // Assert
            expect(weatherData1).toBeDefined();
            expect(weatherData1).not.toBeUndefined();
        });
        test(`it should have the place set to ${PLACES[0]}`, () => {
            // Assert
            expect(weatherData1.getPlace()).toEqual(PLACES[0]);
        });
        test(`it should have the value set to ${weatherData1.getValue()}.`, () => {
            // Assert
            expect(weatherData1.getValue()).toBe(100);
        });
        test(`it should have the unit set to ${weatherData1.getUnit()}`, () => {
            // Assert
            expect(weatherData1.getUnit()).toEqual(CELSIUS_UNIT);
        });
        test(`it should have the type set to ${weatherData1.getType()}`, () => {
            // Assert
            expect(weatherData1.getType()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the date set to ${weatherData1.getTime()}`, () => {
            // Assert
            expect(weatherData1.getTime()).toEqual(new Date(START_DATE));
        });
    });

    // Setup
    let newValue = 200;
    let weatherData2 = new WeatherData({place:PLACES[0], time:new Date(START_DATE), type:CELSIUS_TYPE, unit:CELSIUS_UNIT, value:100});
    describe(`After it has been initialized with the values ${weatherData1.getTime()}, ${weatherData1.getPlace()}, ` +
        `${weatherData1.getValue()}, ${weatherData2.getUnit()}, ${weatherData2.getType()}.`, () => {
        test(`it be possible to change the value to ${newValue}`, () => {
            // Act
            weatherData2.setValue(newValue);
            // Assert
            expect(weatherData2.getValue()).toEqual(newValue);
        });
        test(`it should be possible to change the place`, () => {
            // Act
            weatherData2.setPlace(PLACES[4]);
            // Assert
            expect(weatherData2.getPlace()).toBeDefined();
            expect(weatherData2.getPlace()).toEqual(PLACES[4]);
        });
        test(`it should be possible to change the time`, () => {
            // Act
            weatherData2.setTime(new Date(START_DATE_2));
            // Assert
            expect(weatherData2.setTime(new Date(START_DATE_2))).toBeDefined();
            expect(weatherData2.getTime()).toEqual(new Date(START_DATE_2));
        });
        describe(`and the place is changed to ${PLACES.slice(-1)[0]}`, () => {
            beforeEach(() => {
                // Setup
                weatherData2.setPlace(PLACES.slice(-1)[0]);
            });
            test(`it should be possible to change the unit`, () => {
                // Act
                weatherData2.setUnit(FAHRENHEIT_UNIT);
                // Assert
                expect(weatherData2.getUnit()).toEqual(FAHRENHEIT_UNIT);
                expect(weatherData2.getPlace()).toEqual('Los Santos');
            });
            test(`it should be possible to change the type`, () => {
                // Act
                weatherData2.setType(FAHRENHEIT_TYPE);
                // Assert
                expect(weatherData2.getType()).toEqual(FAHRENHEIT_TYPE);
                expect(weatherData2.getPlace()).toEqual('Los Santos');
            });
        });
    });
});