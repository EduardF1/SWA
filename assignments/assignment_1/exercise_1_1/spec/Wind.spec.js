const {Wind} = require('../src/Wind');
const {PLACES, START_DATE, MPS_TYPE, MPH_TYPE, MPS, MPH, DIRECTIONS} = require("../../Constants");

describe("Wind", () => {
    let windInMoscow = 30;
    let wind1 = Wind(PLACES[2],new Date(START_DATE), MPH_TYPE, MPH, windInMoscow, DIRECTIONS[0]);
    describe(`When it has been initialized with values ${wind1.getTime()}, ${wind1.getPlace()}` +
        `, ${wind1.getUnit()}, ${wind1.getType()}, ${wind1.getValue()}, ${wind1.getDirection()}`, () => {
        test("it should be created", () => {
            // Assert
            expect(wind1).toBeDefined();
        });
        test(`it should have the place set to ${wind1.getPlace()}`, () => {
            // Assert
            expect(wind1.getPlace()).toEqual(PLACES[2]);
        });
        test(`it should have the time set to ${wind1.getTime()}`, () => {
            // Assert
            expect(wind1.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${wind1.getType()}`, () => {
            // Assert
            expect(wind1.getType()).toEqual(MPH_TYPE);
        });
        test(`it should have the unit set to ${wind1.getUnit()}`, () => {
            // Assert
            expect(wind1.getUnit()).toEqual(MPH);
        });
        test(`it should have the value set to ${wind1.getValue()}`, () => {
            // Assert
            expect(wind1.getValue()).toEqual(windInMoscow);
        });
        test(`it should have the value set to ${wind1.getDirection()}`, () => {
            // Assert
            expect(wind1.getDirection()).toEqual(DIRECTIONS[0]);
        });
    });

    describe(`After it has been initialized with the values ${wind1.getTime()}, ${wind1.getPlace()}, ` +
        `${wind1.getValue()}, ${wind1.getUnit()}, ${wind1.getType()}, ${wind1.getDirection()}`, () => {
        test(`it should be possible to convert the values from ${wind1.getType()} to ${MPS_TYPE}`, () => {
            // Act
            wind1.convertToMS();
            // Assert
            expect(wind1.getType()).toEqual(MPS_TYPE);
            expect(wind1.getUnit()).toEqual(MPS);
            expect(wind1.getValue()).toBeCloseTo(13.41);
        });
        test(`it should be possible to convert the values from ${wind1.getType()} to ${MPH_TYPE}`, () => {
            // Act
            wind1.convertToMPH();
            // Assert
            expect(wind1.getType()).toEqual(MPH_TYPE);
            expect(wind1.getUnit()).toEqual(MPH);
            expect(wind1.getValue()).toBeCloseTo(30);
        });
    });
});