const {PrecipitationPrediction} = require('../src/PrecipitationPrediction');
const {IN_UNIT, MM_UNIT, VALUES, RAIN, FOG, SNOW} = require("../../../../Constants");

let precipitationPrediction1;
describe('Precipitation Prediction', () => {
    beforeAll(() => {
        precipitationPrediction1 = new PrecipitationPrediction(IN_UNIT, VALUES[0], VALUES[1], [RAIN, FOG])
    });

    it('Should be initialized', () => {
        expect(precipitationPrediction1).toBeDefined();
    });
    it(`Should have the unit set to ${IN_UNIT}`, () => {
        expect(precipitationPrediction1.getUnit()).toBe(IN_UNIT);
    });
    it(`Should have the min value set to ${VALUES[0]}`, () => {
        expect(precipitationPrediction1.getMinValue()).toEqual(VALUES[0]);
    });
    it(`Should have the max value set to ${VALUES[1]}`, () => {
        expect(precipitationPrediction1.getMaxValue()).toEqual(VALUES[1]);
    });
    it(`Should have the expected types ${[RAIN, FOG]}`, () => {
        expect(precipitationPrediction1.getExpectedTypes()).toEqual([RAIN, FOG]);
    });
    describe('After initialization', () => {
        it('The min property should be immutable', () => {
            // Act
            precipitationPrediction1.setMinValue(VALUES[9]);
            // Assert
            expect(precipitationPrediction1.getMinValue()).toEqual(VALUES[0]);
        });
        it('The max property should be immutable', () => {
            // Act
            precipitationPrediction1.setMaxValue(VALUES[9]);
            // Assert
            expect(precipitationPrediction1.getMaxValue()).toEqual(VALUES[1]);
        });
        it('The expected types property should be immutable', () => {
            // Act
            precipitationPrediction1.setExpectedTypes([FOG,SNOW]);
            // Assert
            expect(precipitationPrediction1.getExpectedTypes()).toEqual([RAIN,FOG]);
        });
        it('The unit type property should be immutable', () => {
            // Act
            precipitationPrediction1.setUnit(MM_UNIT);
            // Assert
            expect(precipitationPrediction1.getUnit()).toEqual(IN_UNIT);
        });
    });
});