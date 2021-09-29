const {DateInterval} = require('../../src/factories/DateInterval');
const {START_DATE, END_DATE, END_DATE_2, START_DATE_2} = require('../../../../Constants');


describe('Date Interval', () => {
    // Setup
    let dateFrom = new Date(START_DATE);
    let dateTo = new Date(END_DATE);
    let dateInterval1 =  DateInterval(dateFrom, dateTo);
    describe(`When it has been initialized with the values ${dateInterval1.getFrom()} and ${dateInterval1.getTo()}`, () => {
        test('it should be created', () => {
            // Assert
            expect(dateInterval1).toBeDefined();
        });
        test(`it should have the from property set to ${START_DATE}`, () => {
            // Assert
            expect(dateInterval1.getFrom()).toEqual(new Date(START_DATE));
            expect(dateInterval1.getFrom()).toBeDefined();
        });
        test(`it should have the to property set to ${END_DATE}`, () => {
            // Assert
            expect(dateInterval1.getTo()).toEqual(new Date(END_DATE));
            expect(dateInterval1.getTo()).toBeDefined();
        });
    });
    describe(`When  it has been initialized with the values ${START_DATE} (Start Date), ${END_DATE} (End Date)`, () => {
        test(`it should be possible to change the from property to ${dateTo} and the to property to ${dateFrom}`, () => {
            // Arrange
            // Act
            dateInterval1.setFrom(new Date(START_DATE_2));
            dateInterval1.setTo(new Date(END_DATE_2));
            // Assert
            expect(dateInterval1.getFrom().toISOString().slice(0, 10)).toEqual(START_DATE_2);
            expect(dateInterval1.getTo().toISOString().slice(0, 10)).toEqual(END_DATE_2);
        });
        test(`it should contain the date ${END_DATE} in the interval of ${START_DATE} and ${END_DATE_2}`, () => {
            // Arrange
            // Act
            // Assert
            expect(dateInterval1.contains(new Date(END_DATE))).toBe(true);
            expect(dateInterval1.contains(new Date(END_DATE))).toBeDefined();
        });
    });
});