const {Temperature} = require('../src/Temperature');
const {PLACES, START_DATE, CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../Constants");

describe("Temperature", () => {
    let temperatureInMoscow = 20;
    let temperature1 = Temperature(PLACES[2], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, temperatureInMoscow);
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
            expect(temperature1.getValue()).toEqual(temperatureInMoscow);
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
});