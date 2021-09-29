const {WindPrediction} = require('../../src/factories/WindPrediction');
const {PLACES, END_DATE, DIRECTIONS, MPS_TYPE, MPS_UNIT, MPH_TYPE, MPH_UNIT, VALUES} = require("../../../../Constants");
describe("Wind Prediction", () => {

    let windPrediction = WindPrediction({unit: MPS_UNIT, type: MPS_TYPE, place: PLACES[6], time: new Date(END_DATE), min: VALUES[5], max: VALUES[1], expectedDirections: DIRECTIONS});
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
            expect(windPrediction.getType()).toEqual(MPS_TYPE);
        });
        test(`it should have the unit set to ${windPrediction.getUnit()}`, () => {
            // Assert
            expect(windPrediction.getUnit()).toEqual(MPS_UNIT);
        });
        test(`it should have the min value set to ${windPrediction.getMin()}`, () => {
            // Assert
            expect(windPrediction.getMin()).toEqual( VALUES[5]);
        });
        test(`it should have the max value set to ${windPrediction.getMax()}`, () => {
            // Assert
            expect(windPrediction.getMax()).toEqual( VALUES[1]);
        });
        let index;
        let testUtils = [DIRECTIONS, index = 0];
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
            expect(windPrediction.getMax()).toBeCloseTo(11.7);
            expect(windPrediction.getMin()).toBeCloseTo(28.3);
        });
        test(`it should be possible to convert the values from ${windPrediction.getType()} to ${MPH_TYPE}`, () => {
            // Act
            windPrediction.convertToMPH();
            // Assert
            expect(windPrediction.getType()).toEqual(MPH_TYPE);
            expect(windPrediction.getUnit()).toEqual(MPH_UNIT);
            expect(windPrediction.getMax()).toBeCloseTo(0.46);
            expect(windPrediction.getMin()).toBeCloseTo(1.114);
        });
    });
});