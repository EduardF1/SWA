const {PrecipitationPrediction} = require('../../src/factories/PrecipitationPrediction');
const {PLACES, MM_TYPE, IN_TYPE, MM_UNIT, IN_UNIT, RAIN, FOG, SNOW, END_DATE, VALUES} = require("../../../../Constants");

describe("Precipitation Prediction", () => {
    let precipitationPrediction = PrecipitationPrediction({unit: MM_UNIT, type: MM_TYPE, place: PLACES[6], time: new Date(END_DATE), max: VALUES[1], min: VALUES[5], expectedTypes: [RAIN, FOG, SNOW]});
    describe(`When it has been initialized with values ${precipitationPrediction.getTime()}, ${precipitationPrediction.getPlace()}` +
        `, ${precipitationPrediction.getUnit()}, ${precipitationPrediction.getType()}, ${precipitationPrediction.getMin()}, ${precipitationPrediction.getMax()}, ${precipitationPrediction.getExpectedTypes()}`, () => {
        test("it should be created", () => {
            // Assert
            expect(precipitationPrediction).toBeDefined();
        });
        test(`it should have the place set to ${precipitationPrediction.getPlace()}`, () => {
            // Assert
            expect(precipitationPrediction.getPlace()).toEqual(PLACES[6]);
        });
        test(`it should have the time set to ${precipitationPrediction.getTime()}`, () => {
            // Assert
            expect(precipitationPrediction.getTime()).toEqual(new Date(END_DATE));
        });
        test(`it should have the type set to ${precipitationPrediction.getType()}`, () => {
            // Assert
            expect(precipitationPrediction.getType()).toEqual(MM_TYPE);
        });
        test(`it should have the unit set to ${precipitationPrediction.getUnit()}`, () => {
            // Assert
            expect(precipitationPrediction.getUnit()).toEqual(MM_UNIT);
        });
        test(`it should have the min value set to ${precipitationPrediction.getMin()}`, () => {
            // Assert
            expect(precipitationPrediction.getMin()).toEqual(VALUES[5]);
        });
        test(`it should have the max value set to ${precipitationPrediction.getMax()}`, () => {
            // Assert
            expect(precipitationPrediction.getMax()).toEqual(VALUES[1]);
        });
        let index;
        let testUtils = [[RAIN, FOG, SNOW], index = 0];
        test.each(precipitationPrediction.getExpectedTypes())(
            '',
            (element) => {
                expect(element).toBe(testUtils[0][index++]);
            },
        );
    });

    describe(`After it has been initialized with the values ${precipitationPrediction.getTime()}, ${precipitationPrediction.getPlace()}, ` +
        `${precipitationPrediction.getMin()}, ${precipitationPrediction.getMax()}, ${precipitationPrediction.getUnit()}, ${precipitationPrediction.getType()}, ${precipitationPrediction.getExpectedTypes()}`, () => {
        test(`it should be possible to convert the values from ${precipitationPrediction.getType()} to ${IN_TYPE}`, () => {
            // Act
            precipitationPrediction.convertToInches();
            // Assert
            expect(precipitationPrediction.getType()).toEqual(IN_TYPE);
            expect(precipitationPrediction.getUnit()).toEqual(IN_UNIT);
            expect(precipitationPrediction.getMax()).toBeCloseTo(0.46);
            expect(precipitationPrediction.getMin()).toBeCloseTo(1.11);
        });
        test(`it should be possible to convert the values from ${precipitationPrediction.getType()} to ${IN_TYPE}`, () => {
            // Act
            precipitationPrediction.convertToMM();
            // Assert
            expect(precipitationPrediction.getType()).toEqual(MM_TYPE);
            expect(precipitationPrediction.getUnit()).toEqual(MM_UNIT);
            expect(precipitationPrediction.getMax()).toBeCloseTo(0.018);
            expect(precipitationPrediction.getMin()).toBeCloseTo(0.044);
        });
    });
});