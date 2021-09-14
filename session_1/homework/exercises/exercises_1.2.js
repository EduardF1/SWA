// Implement classes using factory methods

// The temperature class
function temperature(unit, value) {
    return {
        getUnit() {
            return unit;
        },
        getValue() {
            return value;
        },
        convertToF() {
            value = (value * 9 / 5) + 32;
            unit = 'fahrenheit';
        },
        convertToC() {
            value = (value - 32) * 5 / 9;
            unit = 'celsius';
        }
    }
}

let temp1 = temperature('celsius', 100)
console.log('\n Temperature:')
console.log(temp1.getUnit());
console.log(temp1.getValue());
temp1.convertToF();
console.log(temp1.getValue());
console.log(temp1.getUnit());
temp1.convertToC();
console.log(temp1.getValue());
console.log(temp1.getUnit());

// The Precipitation class
function precipitation(unit, value, precipitationType) {
    return {
        getUnit() {
            return unit;
        },
        getValue() {
            return value;
        },
        getPrecipitationType() {
            return precipitationType;
        },
        convertToInches() {
            value = value / 25.4;
            unit = 'inches';
        },
        convertToMM() {
            value = value * 25.4;
            unit = 'MM'
        }
    }
}

let prec1 = precipitation('mm', 100, 'rain')
console.log('\n Precipitation:')
console.log(prec1.getUnit() + '\n' +
    prec1.getValue() + '\n' +
    prec1.getPrecipitationType())
prec1.convertToInches();
console.log(prec1.getUnit() + '\n' +
    prec1.getValue() + '\n' +
    prec1.getPrecipitationType())
prec1.convertToMM()
console.log(prec1.getUnit() + '\n' +
    prec1.getValue() + '\n' +
    prec1.getPrecipitationType())

// The Wind class
function wind(unit, value, direction) {
    const originalValue = value;
    return {
        getUnit() {
            return unit;
        },
        getValue() {
            return value;
        },
        getDirection() {
            return direction;
        },
        convertToMPH() {
            if (unit !== 'MPH') {
                value = Math.round(value * 2.24);
                unit = 'MPH';
            } else {
                value = originalValue;
            }
        },
        convertToMS() {
            if (unit !== 'MS') {
                value = value * 0.45;
                unit = 'MS';
            } else {
                value = originalValue;
            }
        }
    }
}

let wind1 = wind('MPH', 1, 'north')
console.log('\n Wind:')
console.log(wind1.getValue() + '\n' +
    wind1.getUnit() + '\n' +
    wind1.getDirection())
wind1.convertToMS();
console.log(wind1.getValue() + '\n' +
    wind1.getUnit() + '\n' +
    wind1.getDirection())
wind1.convertToMPH();
console.log(wind1.getValue() + '\n' +
    wind1.getUnit() + '\n' +
    wind1.getDirection())

// The TemperaturePrediction class
function temperaturePrediction(unit, minValue, maxValue) {
    return {
        getUnit() {
            return unit;
        },
        getMinValue() {
            return minValue;
        },
        getMaxValue() {
            return maxValue;
        },
        matches(temperature) {
            return temperature.getValue() === minValue || temperature.getValue() === maxValue;
        },
        convertToF() {
            minValue = (minValue * 9 / 5) + 32;
            maxValue = (minValue * 9 / 5) + 32;
            unit = 'fahrenheit';
        },
        convertToC() {
            minValue = Math.round((minValue - 32) * 5 / 9);
            maxValue = Math.round((maxValue - 32) * 5 / 9);
            unit = 'celsius';
        }
    }
}

let tempPrediction1 = temperaturePrediction('celsius', -10, 30);
let temp2 = temperature('celsius', 30)

console.log('\n Temperature Prediction:')
console.log(tempPrediction1.getUnit());
console.log(tempPrediction1.getMinValue());
console.log(tempPrediction1.getMaxValue());
console.log(tempPrediction1.matches(temp2));
tempPrediction1.convertToF();
console.log(tempPrediction1.getMinValue());
console.log(tempPrediction1.getMaxValue());
console.log(tempPrediction1.getUnit());
tempPrediction1.convertToC();
console.log(tempPrediction1.getMinValue());
console.log(tempPrediction1.getMaxValue());
console.log(tempPrediction1.getUnit());

// The PrecipitationPrediction class
function precipitationPrediction(unit, minValue, maxValue, expectedTypes) {
    return {
        getMinValue() {
            return minValue;
        },
        getMaxValue() {
            return maxValue;
        },
        getUnit() {
            return unit;
        },
        getExpectedTypes() {
            return expectedTypes;
        },
        matches(data) {
            return data.getValue() === maxValue || data.getValue() === minValue;
        },
        convertToInches() {
            minValue = minValue / 25.4;
            maxValue = maxValue / 25.4;
            unit = 'inches';
        },
        convertToMM() {
            minValue = minValue * 25.4;
            maxValue = maxValue * 25.4;
            unit = 'MM'
        }
    }
}

let prec2 = precipitation('celsius', 100, 'rain');
let precPrediction1 = precipitationPrediction('celsius', 10, 100, ['rain', 'snow'])
console.log('\n Precipitation Prediction:')
console.log(precPrediction1.matches(prec2));
console.log(precPrediction1.getExpectedTypes() + "\n" +
    precPrediction1.getMinValue() + "\n" +
    precPrediction1.getMaxValue() + "\n" +
    precPrediction1.getUnit() + "\n" +
    precPrediction1.getUnit());
precPrediction1.convertToMM();
console.log(precPrediction1.getExpectedTypes() + "\n" +
    precPrediction1.getMinValue() + "\n" +
    precPrediction1.getMaxValue() + "\n" +
    precPrediction1.getUnit() + "\n" +
    precPrediction1.getExpectedTypes());

// The WindPrediction class
function windPrediction(unit, minValue, maxValue,expectedDirections) {
    const originalMinValue = minValue;
    const originalMaxValue = maxValue;
    return {
        getMinValue() {
            return minValue;
        },
        getMaxValue() {
            return maxValue;
        },
        getUnit() {
            return unit;
        },
        getExpectedTypes() {
            return expectedDirections;
        },
        matches(data) {
            return data.getValue() === maxValue || data.getValue() === minValue;
        },
        convertToMPH() {
            if (unit !== 'MPH') {
                minValue = Math.round(minValue * 2.24);
                maxValue = Math.round(maxValue * 2.24);
                unit = 'MPH';
            } else {
                minValue = originalMinValue;
                maxValue = originalMaxValue;
            }
        },
        convertToMS() {
            if (unit !== 'MS') {
                minValue = minValue * 0.45;
                maxValue = maxValue * 0.45;
                unit = 'MS';
            } else {
                minValue = originalMinValue;
                maxValue = originalMaxValue;
            }
        }
    }
}

let wind2 = wind('MPH', 100, 'south-east');
let windPred1 = windPrediction('MPH', 100, 1000, ['south', 'south-west', 'east']);
console.log('\n Wind Prediction:')
console.log(windPred1.matches(wind2));
console.log(windPred1.getExpectedTypes() + "\n" +
    windPred1.getMinValue() + "\n" +
    windPred1.getMaxValue() + "\n" +
    windPred1.getUnit() + "\n");
windPred1.convertToMS();
console.log(windPred1.getExpectedTypes() + "\n" +
    windPred1.getMinValue() + "\n" +
    windPred1.getMaxValue() + "\n" +
    windPred1.getUnit() + "\n" +
    windPred1.getExpectedTypes());
