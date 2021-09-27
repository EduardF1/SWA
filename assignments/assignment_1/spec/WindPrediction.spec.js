const {WindPrediction} = require('../src/factories/WindPrediction');
const {PLACES, END_DATE, DIRECTIONS, MPS_TYPE, MPS_UNIT, MPH_TYPE, MPH, VALUES} = require("../../../Constants");
describe("Wind Prediction", () => {
    let expectedDirections = DIRECTIONS;
    let minTemperatureInStalingrad = VALUES[5];
    let maxTemperatureInStalingrad = VALUES[1];
    let windPrediction = WindPrediction(MPH, MPH_TYPE, PLACES[6], new Date(END_DATE), maxTemperatureInStalingrad, minTemperatureInStalingrad, expectedDirections);
    describe(`When it has been initialized with values ${windPrediction.getTime()}, ${windPrediction.getPlace()}` +
        `, ${windPrediction.getUnit()}, ${windPrediction.getType()}, ${windPrediction.getMin()}, ${windPrediction.getMax()}, ${windPrediction.getExpectedDirections()}`, () => {
        test("it should be created", () => {
            // Assert
            expect(windPrediction).toBeDefined();
        });
        test(`it should have the place set to ${windPrediction.getPlace()}`, () => {
            // Assert
            expect(windPrediction.getPlace()).toEqual(PLACES[6]);
        });
        test(`it should have the time set to ${windPrediction.getTime()}`, () => {
            // Assert
            expect(windPrediction.getTime()).toEqual(new Date(END_DATE));
        });
        test(`it should have the type set to ${windPrediction.getType()}`, () => {
            // Assert
            expect(windPrediction.getType()).toEqual(MPH_TYPE);
        });
        test(`it should have the unit set to ${windPrediction.getUnit()}`, () => {
            // Assert
            expect(windPrediction.getUnit()).toEqual(MPH);
        });
        test(`it should have the min value set to ${windPrediction.getMin()}`, () => {
            // Assert
            expect(windPrediction.getMin()).toEqual(minTemperatureInStalingrad);
        });
        test(`it should have the max value set to ${windPrediction.getMax()}`, () => {
            // Assert
            expect(windPrediction.getMax()).toEqual(maxTemperatureInStalingrad);
        });
        let index;
        let testUtils = [expectedDirections, index = 0];
        test.each(windPrediction.getExpectedDirections())(
            '',
            (element) => {
                expect(element).toBe(testUtils[0][index++]);
            },
        );
    });

    describe(`After it has been initialized with the values ${windPrediction.getTime()}, ${windPrediction.getPlace()}, ` +
        `${windPrediction.getMax()}, ${windPrediction.getMin()}, ${windPrediction.getUnit()}, ${windPrediction.getType()}, ${windPrediction.getExpectedDirections()}`, () => {
        test(`it should be possible to convert the values from ${windPrediction.getType()} to ${MPS_TYPE}`, () => {
            // Act
            windPrediction.convertToMS();
            // Assert
            expect(windPrediction.getType()).toEqual(MPS_TYPE);
            expect(windPrediction.getUnit()).toEqual(MPS_UNIT);
            expect(windPrediction.getMax()).toBeCloseTo(0.46);
            expect(windPrediction.getMin()).toBeCloseTo(1.115);
        });
        test(`it should be possible to convert the values from ${windPrediction.getType()} to ${MPH_TYPE}`, () => {
            // Act
            windPrediction.convertToMPH();
            // Assert
            expect(windPrediction.getType()).toEqual(MPH_TYPE);
            expect(windPrediction.getUnit()).toEqual(MPH);
            expect(windPrediction.getMax()).toBeCloseTo(0.018);
            expect(windPrediction.getMin()).toBeCloseTo(0.044);
        });
    });
});