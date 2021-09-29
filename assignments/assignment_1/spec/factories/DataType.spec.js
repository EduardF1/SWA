const {DataType} = require("../../src/factories/DataType.js");
const {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../../../Constants");

describe("DataType", () => {
    describe(`When it has been initialized with the arguments ${CELSIUS_TYPE} and ${CELSIUS_UNIT}`, () => {
        // Setup
        let dataType1 = DataType({unit: CELSIUS_UNIT, type: CELSIUS_TYPE});
        test("it should be created", () => {
            // Assert
            expect(dataType1).toBeDefined();
        });
        test(`it should have the type set to ${dataType1.getType()}`, () => {
            // Assert
            expect(dataType1.getType()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the unit set to ${CELSIUS_UNIT} `, () => {
            // Assert
            expect(dataType1.getUnit()).toEqual(CELSIUS_UNIT);
        });
    });

    describe(`When it has been initialized with the arguments ${FAHRENHEIT_TYPE} and ${FAHRENHEIT_UNIT}`, () => {
        // Arrange & Act
        let dataType2 = DataType({type:FAHRENHEIT_TYPE, unit:FAHRENHEIT_UNIT});
        test("it should be created", () => {
            // Assert
            expect(dataType2).toBeDefined();
        });
        test(`it should have the type set to ${dataType2.getType()}`, () => {
            // Assert
            expect(dataType2.getType()).toEqual(FAHRENHEIT_TYPE);
        });
        test(`it should have the unit set to FAHRENHEIT_UNIT`, () => {
            // Assert
            expect(dataType2.getUnit()).toEqual(FAHRENHEIT_UNIT);
        });
    });

    describe(`When it has been initialized with the arguments ${CELSIUS_TYPE} and ${CELSIUS_UNIT}`, () => {
        // Arrange
        let dataType3 = DataType({ unit:CELSIUS_UNIT, type:CELSIUS_TYPE});
        test(`it should be possible to change the the type from ${CELSIUS_TYPE} to ${FAHRENHEIT_TYPE}`, () => {
            // Act
            dataType3.setType(FAHRENHEIT_TYPE);
            // Assert
            expect(dataType3.getType()).toBe(FAHRENHEIT_TYPE);
        });
        test(`it should be possible to change the the unit from ${CELSIUS_UNIT} to ${FAHRENHEIT_UNIT}`, () => {
            // Act
            dataType3.setType(FAHRENHEIT_UNIT);
            // Assert
            expect(dataType3.getType()).toBe(FAHRENHEIT_UNIT);
        });
    })
});
