const {TemperaturePrediction} = require('../src/TemperaturePrediction');
const {PLACES, START_DATE, CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../Constants");

describe("Temperature Prediction", () => {
    let minTemperatureInSibiu = 15;
    let maxTemperatureInSibiu = 25;
    let temperaturePrediction = TemperaturePrediction(CELSIUS_UNIT, CELSIUS_TYPE, PLACES[3], new Date(START_DATE), minTemperatureInSibiu, maxTemperatureInSibiu);
    describe(`When it has been initialized with values ${temperaturePrediction.getTime()}, ${temperaturePrediction.getPlace()}` +
        `, ${temperaturePrediction.getUnit()}, ${temperaturePrediction.getType()}, ${temperaturePrediction.getMin()}, ${temperaturePrediction.getMax()}.`, () => {
        test("it should be created", () => {
            // Assert
            expect(temperaturePrediction).toBeDefined();
        });
        test(`it should have the place set to ${temperaturePrediction.getPlace()}`, () => {
            // Assert
            expect(temperaturePrediction.getPlace()).toEqual(PLACES[3]);
        });
        test(`it should have the time set to ${temperaturePrediction.getTime()}`, () => {
            // Assert
            expect(temperaturePrediction.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${temperaturePrediction.getType()}`, () => {
            // Assert
            expect(temperaturePrediction.getType()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the unit set to ${temperaturePrediction.getUnit()}`, () => {
            // Assert
            expect(temperaturePrediction.getUnit()).toEqual(CELSIUS_UNIT);
        });
        test(`it should have the min value set to ${temperaturePrediction.getMin()}`, () => {
            // Assert
            expect(temperaturePrediction.getMin()).toEqual(minTemperatureInSibiu);
        });
        test(`it should have the max value set to ${temperaturePrediction.getMax()}`, () => {
            // Assert
            expect(temperaturePrediction.getMax()).toEqual(maxTemperatureInSibiu);
        });
    });

    describe(`After it has been initialized with the values ${temperaturePrediction.getTime()}, ${temperaturePrediction.getPlace()}, ` +
        `${temperaturePrediction.getMin()}, ${temperaturePrediction.getMax()}, ${temperaturePrediction.getUnit()}, ${temperaturePrediction.getType()}.`, () => {
        test(`it should be possible to convert the values from ${temperaturePrediction.getType()} to ${FAHRENHEIT_TYPE}`, () => {
            // Act
            temperaturePrediction.convertToF();
            // Assert
            expect(temperaturePrediction.getType()).toEqual(FAHRENHEIT_TYPE);
            expect(temperaturePrediction.getUnit()).toEqual(FAHRENHEIT_UNIT);
            expect(temperaturePrediction.getMin()).toEqual(59);
            expect(temperaturePrediction.getMax()).toEqual(77);
        });
        test(`it should be possible to convert the values from ${temperaturePrediction.getType()} to ${CELSIUS_TYPE}`, () => {
            // Act
            temperaturePrediction.convertToC();
            // Assert
            expect(temperaturePrediction.getType()).toEqual(CELSIUS_TYPE);
            expect(temperaturePrediction.getUnit()).toEqual(CELSIUS_UNIT);
            expect(temperaturePrediction.getMin()).toEqual(15);
            expect(temperaturePrediction.getMax()).toEqual(25);
        });
    });
});