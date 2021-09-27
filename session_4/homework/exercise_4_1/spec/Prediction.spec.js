const {Precipitation} = require('../src/Precipitation');
const {IN, MM, RAIN, VALUES, SNOW} = require("../../../../Constants");

let precipitation1;
describe('Precipitation', () => {
    beforeAll(() => {
        precipitation1 = new Precipitation(IN, VALUES[0], RAIN)
    });

    it('Should be initialized', () => {
        expect(precipitation1).toBeDefined();
    });
    it(`Should have the unit set to ${IN}`, () => {
        expect(precipitation1.getUnit()).toBe(IN);
    });
    it('Should have the value set to 10', () => {
        expect(precipitation1.getValue()).toEqual(10);
    });
    it('Should have the precipitation rain', () => {
        expect(precipitation1.getPrecipitationType()).toEqual(RAIN);
    });
    describe('After initialization', () => {
        it('The value property should be immutable', () => {
            // Act
            precipitation1.setValue(VALUES[9]);
            // Assert
            expect(precipitation1.getValue()).toEqual(VALUES[0]);
        });
        it('The unit property should be immutable', () => {
            // Act
            precipitation1.setUnit(MM);
            // Assert
            expect(precipitation1.getUnit()).toEqual(IN);
        });
        it('The precipitation type property should be immutable', () => {
            // Act
            precipitation1.setPrecipitationType(SNOW);
            // Assert
            expect(precipitation1.getPrecipitationType()).toEqual(RAIN);
        });
    });
});