const {CloudCoverage} = require('../../src/factories/CloudCoverage');
const {PLACES, START_DATE, CELSIUS_TYPE, CELSIUS_UNIT, VALUES} = require("../../../../Constants");

describe("Temperature", () => {
    let cloudCoverage = CloudCoverage({place:PLACES[5], time:new Date(START_DATE), type:CELSIUS_TYPE, unit:CELSIUS_UNIT, value:VALUES[3]});
    describe(`When it has been initialized with values ${cloudCoverage.getTime()}, ${cloudCoverage.getPlace()}` +
        `, ${cloudCoverage.getUnit()}, ${cloudCoverage.getType()}, ${cloudCoverage.getValue()}.`, () => {
        test("it should be created", () => {
            // Assert
            expect(cloudCoverage).toBeDefined();
        });
        test(`it should have the place set to ${cloudCoverage.getPlace()}`, () => {
            // Assert
            expect(cloudCoverage.getPlace()).toEqual(PLACES[5]);
        });
        test(`it should have the time set to ${cloudCoverage.getTime()}`, () => {
            // Assert
            expect(cloudCoverage.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${cloudCoverage.getType()}`, () => {
            // Assert
            expect(cloudCoverage.getType()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the unit set to ${cloudCoverage.getUnit()}`, () => {
            // Assert
            expect(cloudCoverage.getUnit()).toEqual(CELSIUS_UNIT);
        });
        test(`it should have the value set to ${cloudCoverage.getValue()}`, () => {
            // Assert
            expect(cloudCoverage.getValue()).toEqual(VALUES[3]);
        });
    });
});