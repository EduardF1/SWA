const {Temperature} = require('../src/Temperature');
const {CELSIUS_UNIT, FAHRENHEIT_UNIT, VALUES} = require("../../../../Constants");

let temperature1;
describe('Temperature', () => {
    beforeAll(() => {
        temperature1 = new Temperature(CELSIUS_UNIT, VALUES[0])
    });

    it('Should be initialized', () => {
        expect(temperature1).toBeDefined();
    });
    it(`Should have the unit set to ${CELSIUS_UNIT}`, () => {
        expect(temperature1.getUnit()).toBe(CELSIUS_UNIT);
    });
    it('Should have the value set to 10', () => {
        expect(temperature1.getValue()).toEqual(VALUES[0]);
    });
    describe('After initialization', () => {
        it('The value property should be immutable', () => {
            // Act
            temperature1.setValue(VALUES[9]);
            // Assert
            expect(temperature1.getValue()).toEqual(VALUES[0]);
        });
        it('The unit property should be immutable', () => {
            // Act
            temperature1.setUnit(FAHRENHEIT_UNIT);
            // Assert
            expect(temperature1.getUnit()).toEqual(CELSIUS_UNIT);
        });
    });
});