const {WeatherPrediction} = require('../src/WeatherPrediction');
const {WeatherData} = require('../src/WeatherData');
const {PLACES, START_DATE, CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT} = require("../../Constants");


describe("Weather Prediction", () => {
    let minTemperatureInLosSantos = 50;
    let maxTemperatureInLosSantos = 30;
    let weatherPrediction = WeatherPrediction(CELSIUS_UNIT, CELSIUS_TYPE, PLACES[9], new Date(START_DATE), CELSIUS_TYPE,  minTemperatureInLosSantos, maxTemperatureInLosSantos);
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
            expect(weatherPrediction.getValue()).toEqual(minTemperatureInLosSantos);
        });
        test(`it should have the value set to ${weatherPrediction.getMax()}`, () => {
            // Assert
            expect(weatherPrediction.getValue()).toEqual(maxTemperatureInLosSantos);
        });
    });

    describe(`After it has been initialized with the values ${weatherPrediction.getTime()}, ${weatherPrediction.getPlace()}, ` +
        `${weatherPrediction.getMin()}, ${weatherPrediction.getMax()}, ${weatherPrediction.getUnit()}, ${weatherPrediction.getType()}.`, () => {
        test(`it should match the weather data object with the same parameters`, () => {
            // Arrange
            let weatherData1 = WeatherData(PLACES[9], new Date(START_DATE), CELSIUS_TYPE, CELSIUS_UNIT, 40);
            // Act
            // Assert
            expect(weatherPrediction.matches(weatherData1)).toEqual(true);
        });
    });
});