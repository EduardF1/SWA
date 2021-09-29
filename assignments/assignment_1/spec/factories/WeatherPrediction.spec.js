const {WeatherPrediction} = require('../../src/factories/WeatherPrediction');
const {WeatherData} = require('../../src/factories/WeatherData');
const {PLACES, START_DATE, CELSIUS_TYPE, CELSIUS_UNIT, VALUES} = require("../../../../Constants");


describe("Weather Prediction", () => {
    let weatherPrediction = WeatherPrediction({unit: CELSIUS_UNIT, type: CELSIUS_TYPE, place: PLACES[9], time: new Date(START_DATE), min: VALUES[6], max: VALUES[8]});
    describe(`When it has been initialized with values ${weatherPrediction.getTime()}, ${weatherPrediction.getPlace()}` +
        `, ${weatherPrediction.getUnit()}, ${weatherPrediction.getType()}, ${weatherPrediction.getMin()}, ${weatherPrediction.getMax()}.`, () => {
        test("it should be created", () => {
            // Assert
            expect(weatherPrediction).toBeDefined();
        });
        test(`it should have the place set to ${weatherPrediction.getPlace()}`, () => {
            // Assert
            expect(weatherPrediction.getPlace()).toEqual(PLACES[9]);
        });
        test(`it should have the time set to ${weatherPrediction.getTime()}`, () => {
            // Assert
            expect(weatherPrediction.getTime()).toEqual(new Date(START_DATE));
        });
        test(`it should have the type set to ${weatherPrediction.getType()}`, () => {
            // Assert
            expect(weatherPrediction.getType()).toEqual(CELSIUS_TYPE);
        });
        test(`it should have the unit set to ${weatherPrediction.getUnit()}`, () => {
            // Assert
            expect(weatherPrediction.getUnit()).toEqual(CELSIUS_UNIT);
        });
        test(`it should have the value set to ${weatherPrediction.getMin()}`, () => {
            // Assert
            expect(weatherPrediction.getMin()).toEqual(VALUES[6]);
        });
        test(`it should have the value set to ${weatherPrediction.getMax()}`, () => {
            // Assert
            expect(weatherPrediction.getMax()).toEqual(VALUES[8]);
        });
    });

    describe(`After it has been initialized with the values ${weatherPrediction.getTime()}, ${weatherPrediction.getPlace()}, ` +
        `${weatherPrediction.getMin()}, ${weatherPrediction.getMax()}, ${weatherPrediction.getUnit()}, ${weatherPrediction.getType()}.`, () => {
        test(`it should match the weather data object with the same parameters`, () => {
            // Arrange
            let weatherData1 = WeatherData({place:PLACES[9], time:new Date(START_DATE), type:CELSIUS_TYPE, unit:CELSIUS_UNIT, value:VALUES[10]});
            // Act
            // Assert
            expect(weatherPrediction.matches(weatherData1)).toEqual(true);
        });
    });
});