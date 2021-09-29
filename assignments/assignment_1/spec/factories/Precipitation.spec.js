const {Precipitation} = require('../../src/factories/Precipitation');
const {PLACES, START_DATE, MM_TYPE,IN, IN_TYPE, MM, RAIN, VALUES} = require("../../../../Constants");

describe("Precipitation", () => {
    let precipitation1 = Precipitation({time: new Date(START_DATE), place: PLACES[2], type: MM_TYPE, unit: MM, value: VALUES[0], precipitationType: RAIN});
    describe(`When it has been initialized with values ${precipitation1.getTime()}, ${precipitation1.getPlace()}` +
        `, ${precipitation1.getUnit()}, ${precipitation1.getType()}, ${precipitation1.getValue()}, ${precipitation1.getPrecipitationType()}`, () => {
        test("it should be created", () => {
            // Assert
            expect(precipitation1).toBeDefined();
        });
        test(`it should have the place set to ${precipitation1.getPlace()}`, () => {
            // Assert
            expect(precipitation1.getPlace()).toEqual(PLACES[2]);
        });
        test(`it should have the time set to ${precipitation1.getTime()}`, () => {
            // Assert
            expect(precipitation1.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${precipitation1.getType()}`, () => {
            // Assert
            expect(precipitation1.getType()).toEqual(MM_TYPE);
        });
        test(`it should have the unit set to ${precipitation1.getUnit()}`, () => {
            // Assert
            expect(precipitation1.getUnit()).toEqual(MM);
        });
        test(`it should have the value set to ${precipitation1.getValue()}`, () => {
            // Assert
            expect(precipitation1.getValue()).toEqual(VALUES[0]);
        });
        test(`it should have the value set to ${precipitation1.getPrecipitationType()}`, () => {
            // Assert
            expect(precipitation1.getPrecipitationType()).toEqual(RAIN);
        });
    });

    describe(`After it has been initialized with the values ${precipitation1.getTime()}, ${precipitation1.getPlace()}, ` +
        `${precipitation1.getValue()}, ${precipitation1.getUnit()}, ${precipitation1.getType()}, ${precipitation1.getPrecipitationType()}`, () => {
        test(`it should be possible to convert the values from ${precipitation1.getType()} to ${IN_TYPE}`, () => {
            // Act
            precipitation1.convertToInches();
            // Assert
            expect(precipitation1.getType()).toEqual(IN_TYPE);
            expect(precipitation1.getUnit()).toEqual(IN);
            expect(precipitation1.getValue()).toBeCloseTo(0.39);
        });
        test(`it should be possible to convert the values from ${precipitation1.getType()} to ${IN_TYPE}`, () => {
            // Act
            precipitation1.convertToMM();
            // Assert
            expect(precipitation1.getType()).toEqual(MM_TYPE);
            expect(precipitation1.getUnit()).toEqual(MM);
            expect(precipitation1.getValue()).toEqual(10);
        });
    });
});