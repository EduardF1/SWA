const {PLACES, CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require('../../../../Constants');
const {Event} = require('../../src/classes/Event');
const {DataType} = require('../../src/classes/DataType');

// Suites covering the class implementations
describe('Event', () => {
    let event = new Event(PLACES[0], new Date('2000-01-01'));

    it('should be initialized', () => {
        expect(event).toBeDefined();
    });

    it(`should have the place set to ${PLACES[0]}`, () => {
        expect(event.getPlace()).toEqual(PLACES[0]);
    });

    it('should have the date set to 2000-01-01', () => {
        expect(event.getTime()).toEqual(new Date('2000-01-01'));
    });

    it('should be possible to change the place', () => {
        // Act
        event.setPlace(PLACES[1]);
        // Assert
        expect(event.getPlace()).toEqual(PLACES[1]);
    });

    it('should be possible to change the time', () => {
        // Act
        event.setTime(new Date('2004-01-01'));
        // Assert
        expect(event.getTime()).toEqual(new Date('2004-01-01'));
    });
});

describe('Data Type', () => {
    let dataType = new DataType(CELSIUS_TYPE, CELSIUS_UNIT);

    it('should be initialized', () => {
        expect(dataType).toBeDefined();
    });

    it(`should have the type set to ${CELSIUS_TYPE}`, () => {
        expect(dataType.getType()).toEqual(CELSIUS_TYPE);
    });

    it(`should have the unit set to ${CELSIUS_UNIT}`, () => {
        expect(dataType.getUnit()).toEqual(CELSIUS_UNIT);
    });

   it('should be possible to change the unit', () => {
      // Act
      dataType.setUnit(FAHRENHEIT_UNIT)
      // Assert
      expect(dataType.getUnit()).toEqual(FAHRENHEIT_UNIT);
   });

    it('should be possible to change the unit', () => {
        // Act
       dataType.setType(FAHRENHEIT_TYPE);
        // Assert
        expect(dataType.getType()).toEqual(FAHRENHEIT_TYPE);
    });
});

