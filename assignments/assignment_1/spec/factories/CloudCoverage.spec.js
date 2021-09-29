const {CloudCoverage} = require('../../src/factories/CloudCoverage');
const {PLACES, START_DATE, MPH_TYPE, MPH_UNIT, VALUES} = require("../../../../Constants");

describe("Cloud Coverage", () => {
    let cloudCoverage = CloudCoverage({place:PLACES[7], time:new Date(START_DATE),type:MPH_TYPE, unit:MPH_UNIT, value:VALUES[6]});
    describe(`When it has been initialized with values ${cloudCoverage.getTime()}, ${cloudCoverage.getPlace()}` +
        `, ${cloudCoverage.getUnit()}, ${cloudCoverage.getType()}, ${cloudCoverage.getValue()}`, () => {
        test("it should be created", () => {
            // Assert
            expect(cloudCoverage).toBeDefined();
        });
        test(`it should have the place set to ${cloudCoverage.getPlace()}`, () => {
            // Assert
            expect(cloudCoverage.getPlace()).toEqual(PLACES[7]);
        });
        test(`it should have the time set to ${cloudCoverage.getTime()}`, () => {
            // Assert
            expect(cloudCoverage.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${cloudCoverage.getType()}`, () => {
            // Assert
            expect(cloudCoverage.getType()).toEqual(MPH_TYPE);
        });
        test(`it should have the unit set to ${cloudCoverage.getUnit()}`, () => {
            // Assert
            expect(cloudCoverage.getUnit()).toEqual(MPH_UNIT);
        });
        test(`it should have the value set to ${cloudCoverage.getValue()}`, () => {
            // Assert
            expect(cloudCoverage.getValue()).toEqual(VALUES[6]);
        });
    });
});