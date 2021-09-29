const {Event} = require("../../src/factories/Event.js");

describe("Event", () => {
    describe("When it has been initialized with the arguments Milan (place) and 1999-10-12 (Time)", () => {
        // Setup
        let event1 = Event({place:'Milan', time:new Date('1999-10-12')});
        test("it should be created", () => {
            // Assert
            expect(event1).toBeDefined();
        });
        test(`it should have the place set to ${event1.getPlace()}`, () => {
            // Assert
            expect(event1.getPlace()).toEqual('Milan');
        });
        test(`it should have the time set to ${event1.getTime().getTime()} milliseconds`, () => {
            // Assert
            expect(event1.getTime().getTime()).toEqual(939686400000);
        });
    });

    describe("When the values are changed", () => {
        // Arrange
        let event2 = Event({place:'London', time:new Date('2000-01-01')});
        test(`it should have the place changed from ${event2.getPlace()} to Munich and date from ${event2.getTime()} to 2021-11-10`, () => {
            expect(event2.getPlace()).toBe('London');
            // Act
            event2.setPlace('Munich');
            event2.setTime(new Date('2021-11-10'));
            // Assert
            expect(event2.getPlace()).toEqual('Munich');
            expect(event2.getTime()).toEqual(new Date('2021-11-10'));
        });
    });
});