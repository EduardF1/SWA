const {
   PLACES,
   CELSIUS_TYPE,
   CELSIUS_UNIT,
   FAHRENHEIT_TYPE,
   FAHRENHEIT_UNIT,
   START_DATE,
   END_DATE,
   END_DATE_2,
   START_DATE_2,
   VALUES
} = require('../../../../Constants');

const {Event} = require('../../src/classes/Event');
const {DataType} = require('../../src/classes/DataType');
const {DateInterval} = require('../../src/classes/DateInterval');
const {WeatherData} = require('../../src/classes/WeatherData');

// Suites covering the class implementations
describe('Event', () => {
    let event = new Event(PLACES[0], new Date(START_DATE));

    it('should be initialized', () => {
        expect(event).toBeDefined();
    });

    it(`should have the place set to ${PLACES[0]}`, () => {
        expect(event.getPlace()).toEqual(PLACES[0]);
    });

    it(`should have the date set to ${START_DATE}`, () => {
        expect(event.getTime()).toEqual(new Date(START_DATE));
    });

    it('should be possible to change the place', () => {
        // Act
        event.setPlace(PLACES[1]);
        // Assert
        expect(event.getPlace()).toEqual(PLACES[1]);
    });

    it(`should be possible to change the time to ${END_DATE_2}`, () => {
        // Act
        event.setTime(new Date(END_DATE_2));
        // Assert
        expect(event.getTime()).toEqual(new Date(END_DATE_2));
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
      dataType.setUnit(FAHRENHEIT_UNIT);
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

describe('Date Interval', () => {
   let dateInterval1 = new DateInterval(new Date(START_DATE), new Date(END_DATE))

   it('should be initialized',  () => {
      expect(dateInterval1).toBeDefined();
   });

   it(`should have from set to ${START_DATE}`, () =>{
      expect(dateInterval1.getFrom()).toEqual(START_DATE);
   });

   it(`should have to set to ${END_DATE}`, () => {
      expect(dateInterval1.getTo()).toEqual(END_DATE);
   });

   it(`should be possible to change from to ${START_DATE_2}`, () => {
      // Act
      dateInterval1.setFrom(START_DATE_2);
      // Assert
      expect(dateInterval1.getFrom()).toEqual(START_DATE_2);
   });

   it(`should be possible to change to to ${END_DATE_2}`, () => {
      // Act
      dateInterval1.setTo(END_DATE_2);
      // Assert
      expect(dateInterval1.getTo()).toEqual(END_DATE_2);
   });
});

describe('Weather Data', () => {
   let weatherData = new WeatherData(PLACES[0], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, VALUES[0]);

   it('should be initialized',  () => {
      expect(weatherData).toBeDefined();
   });

   it(`should have the place set to ${PLACES[0]}`, () =>{
      expect(weatherData.getPlace()).toEqual(PLACES[0]);
   });

   it(`should have time set to ${START_DATE}`, () =>{
      expect(weatherData.getTime()).toEqual(new Date(START_DATE));
   });

   it(`should have the type set to ${CELSIUS_TYPE}`, () =>{
      expect(weatherData.getType()).toEqual(CELSIUS_TYPE);
   });

   it(`should have the unit set to ${CELSIUS_UNIT}`, () =>{
      expect(weatherData.getUnit()).toEqual(CELSIUS_UNIT);
   });

   it(`should have the value set to ${VALUES[0]}`, () =>{
      expect(weatherData.getValue()).toEqual(VALUES[0]);
   });

    it(`should be possible to set the place to ${PLACES[1]}`, () =>{
        // Act
        weatherData.setPlace(PLACES[1]);
        // Assert
        expect(weatherData.getPlace()).toEqual(PLACES[1]);
    });

    it(`should be possible to set the time to ${START_DATE_2}`, () =>{
        // Act
        weatherData.setTime(START_DATE_2);
        // Assert
        expect(weatherData.getTime()).toEqual(new Date(START_DATE_2));
    });

    it(`should be possible to set the type to ${FAHRENHEIT_TYPE}`, () =>{
        // Act
        weatherData.setType(FAHRENHEIT_TYPE);
        // Assert
        expect(weatherData.getType()).toEqual(FAHRENHEIT_TYPE);
    });

    it(`should have the unit set to ${FAHRENHEIT_UNIT}`, () =>{
        // Act
        weatherData.setUnit(FAHRENHEIT_UNIT);
        // Assert
        expect(weatherData.getUnit()).toEqual(FAHRENHEIT_UNIT);
    });

    it(`should be possible to set the value to ${VALUES[1]}`, () =>{
        // Act
        weatherData.setValue(VALUES[1]);
        // Assert
        expect(weatherData.getValue()).toEqual(VALUES[1]);
    });
});
