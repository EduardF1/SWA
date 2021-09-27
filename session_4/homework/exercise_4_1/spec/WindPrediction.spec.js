const {WindPrediction} = require('../src/WindPrediction');
const {MPS_UNIT, MPH_UNIT, VALUES, DIRECTIONS} = require("../../../../Constants");

let windPrediction1;
describe('Wind Prediction', () => {
    beforeAll(() => {
        windPrediction1 = new WindPrediction(MPS_UNIT, VALUES[0], VALUES[1], [DIRECTIONS[0], DIRECTIONS[1]])
    });

    it('Should be initialized', () => {
        expect(windPrediction1).toBeDefined();
    });
    it(`Should have the unit set to ${MPS_UNIT}`, () => {
        expect(windPrediction1.getUnit()).toBe(MPS_UNIT);
    });
    it(`Should have the min value set to ${VALUES[0]}`, () => {
        expect(windPrediction1.getMinValue()).toEqual(VALUES[0]);
    });
    it(`Should have the max value set to ${VALUES[1]}`, () => {
        expect(windPrediction1.getMaxValue()).toEqual(VALUES[1]);
    });
    it(`Should have the expected directions ${[DIRECTIONS[0], DIRECTIONS[1]]}`, () => {
        expect(windPrediction1.getExpectedDirections()).toEqual([DIRECTIONS[0], DIRECTIONS[1]]);
    });
    describe('After initialization', () => {
        it('The min property should be immutable', () => {
            // Act
            windPrediction1.setMinValue(VALUES[9]);
            // Assert
            expect(windPrediction1.getMinValue()).toEqual(VALUES[0]);
        });
        it('The max property should be immutable', () => {
            // Act
            windPrediction1.setMaxValue(VALUES[9]);
            // Assert
            expect(windPrediction1.getMaxValue()).toEqual(VALUES[1]);
        });
        it('The expected types property should be immutable', () => {
            // Act
            windPrediction1.setExpectedDirections([DIRECTIONS[2], DIRECTIONS[3]]);
            // Assert
            expect(windPrediction1.getExpectedDirections()).toEqual([DIRECTIONS[0], DIRECTIONS[1]]);
        });
        it('The unit type property should be immutable', () => {
            // Act
            windPrediction1.setUnit(MPH_UNIT);
            // Assert
            expect(windPrediction1.getUnit()).toEqual(MPS_UNIT);
        });
    });
});