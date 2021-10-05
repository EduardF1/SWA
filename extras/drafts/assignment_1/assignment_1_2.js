// global constants
const NEW_LINE = '\n';
const MM = 'MM';
const MM_TYPE = 'Millimeters';
const IN = 'IN';
const IN_TYPE = 'Inches';
const MPH = 'MPH';
const MPH_TYPE = 'Miles per Hour';
const MPS = 'MS';
const MPS_TYPE = 'Meters per Second';
const FAHRENHEIT_TYPE = 'Fahrenheit';
const FAHRENHEIT_UNIT = '*F';
const CELSIUS_TYPE = 'Celsius';
const CELSIUS_UNIT = '*C';

class Event {
    constructor(time, place) {
        this.time = time;
        this.place = place;
    }

    getTime = () => this.time;
    setTime = (newTime) => this.time = newTime;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

class DataType {
    constructor(type, unit) {
        this.type = type;
        this.unit = unit;
    }

    setType = (newType) => this.type = newType;
    getType = () => this.type;

    setUnit = (newUnit) => this.unit = newUnit;
    getUnit = () => this.unit;
}

class WeatherData extends Event {
    constructor(time, place, value, type, unit) {
        super(time, place);
        this.value = value;
        this.dataType = new DataType(type, unit);
    }

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setTime = (newTime) => this.time = newTime;
    getTime = () => this.time;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

class Temperature extends WeatherData {
    constructor(time, place, type, unit, value) {
        super(time, place, type, unit, value);
    }

    convertToF = () => {
        this.setValue(this.getValue() * (9 / 5) + 32);
        this.setDataType(new DataType('Fahrenheit', '°F'));
    }

    convertToC = () => {
        this.setValue((this.getValue() - 32) * (5 / 9));
        this.setDataType(new DataType('Celsius', '°C'));
    }
}

class Precipitation extends WeatherData {
    constructor(time, place, value, type, unit, precipitationType) {
        super(time, place, value, type, unit)
        this.precipitationType = precipitationType
    }

    getPrecipitationType = () => this.precipitationType;

    convertToInches = () => {
        super.setValue(super.getValue() / 25.4)
        super.setDataType(new DataType('Inches', 'IN'))
    }
    convertToMM = () => {
        super.setValue(super.getValue() * 25.4)
        super.setDataType(new DataType('Millimeter', 'MM'))
    }
}

class Wind extends WeatherData {
    constructor(time, place, value, type, unit, direction) {
        super(time, place, value, type, unit)
        this.direction = direction
    }

    getDirection = () => this.direction;

    convertToMPH = () => {
        super.setValue(super.getValue() * 2.237)
        super.setDataType(new DataType('Miles per hour', 'MPH'))
    }
    convertToMPS = () => {
        super.setValue(super.getValue() / 2.237)
        super.setDataType(new DataType('Meters per second', 'MPS'))
    }
}

class CloudCoverage extends WeatherData {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit)
        this.cloudCoverage = cloudCoverage
    }

    getCloudCoverage = () => this.cloudCoverage;
}

class WeatherPrediction extends Event {
    constructor(time, place, value, type, unit) {
        super(time, place)
        this.value = value
        this.dataType = new DataType(type, unit)

    }

    getDataType = () => this.dataType;
    setDataType = (newDataType) => this.dataType = newDataType;

    setUnit = (newUnit) => this.dataType.unit = newUnit;

    setType = (newType) => this.dataType = newType;
    getType = () => this.dataType.getType();

    getPlace = () => super.getPlace();
    setPlace = (newPlace) => super.setPlace(newPlace);

    getValue = () => this.value;
    setValue = (newValue) => this.value = newValue;

    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    getMin = (data) => Math.min(data.getValue(), this.getValue());
    getMax = (data) => Math.max(data.getValue(), this.getValue());
}

class TemperaturePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit) {
        super(time, place, value, type, unit);
    }

    convertToF = () => {
        if (this.getDataType().getUnit() === '*C') {
            this.setValue((this.getValue() * 9 / 5) + 32);
            this.getDataType().setUnit('*F');
            this.setType('Fahrenheit');
        }
    }
    convertToC = () => {
        if (this.getDataType().getUnit() === '*F') {
            this.setValue((this.getValue() - 32) * (5 / 9));
            this.getDataType().setUnit('*C');
            this.setType('Celsius');
        }
    }
}

class PrecipitationPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, precipitationTypes) {
        super(time, place, value, type, unit)
        this.precipitationTypes = precipitationTypes
    }

    getExpectedTypes = () => this.precipitationTypes;
    setPrecipitationTypes = (newPrecipitationTypes) => this.precipitationTypes = newPrecipitationTypes;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;

    convertToInches = () => {
        if (this.getDataType().getUnit() === 'MM') {
            this.setValue(this.getValue() / 25.4)
            this.setUnit('IN')
            this.setType('Inches')
        }
    }
    convertToMM = () => {
        if (this.getDataType().getUnit() === 'inches') {
            this.setValue(super.getValue() * 25.4)
            this.setUnit('MM')
            this.setType('Millimeters')
        }
    }
}

class WindPrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, expectedDirections) {
        super(time, place, value, type, unit)
        this.expectedDirections = expectedDirections
    }

    getExpectedDirection = () => this.expectedDirections;
    matches = (data) => (data.getDataType().getType() === this.dataType.getType()) ? (data.getValue() === this.getValue()) : false;
    convertToMPH = () => {
        if (this.getDataType().getUnit() === 'MPH') {
            this.setValue(this.getValue() * 2.237);
            this.getDataType().setUnit('MS');
            this.getDataType().setType('Meters per Second');
        }
    };
    convertToMPS = () => {
        if (this.getDataType().getUnit() === 'MS') {
            this.setValue(this.getValue() / 2.237);
            this.getDataType().setUnit('MPH');
            this.getDataType().setType('Milers per Hour');
        }
    };
}

class CloudCoveragePrediction extends WeatherPrediction {
    constructor(time, place, value, type, unit, cloudCoverage) {
        super(time, place, value, type, unit)
        this.cloudCoverage = cloudCoverage
    }

    getCloudCoverage = () => this.cloudCoverage;
}


// Tests
const weatherData1 = new WeatherData('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
const temperature1 = new Temperature('May 1, 1997 24:00:00', 'Bucharest C', 'Celsius', '*C', 40);
const precipitation1 = new Precipitation('September 13, 1854 04:11:00', 'Harkov', 22, 'Fahrenheit', '*F', 'rain');
const wind1 = new Wind('December 11, 2021 18:11:00', 'Istanbul', 30, 'Celsius', '*C');
const cloudCoverage = new CloudCoverage('January 2, 2021 01:03:04', 'Barcelona', 44, 'Fahrenheit', '*F');

console.log('<========================================================= WEATHER DATA OBJECT TEST ==================================================================>')
console.log(weatherData1);
console.log('<========================================================= TEMPERATURE OBJECT TEST ==================================================================>')
console.log(temperature1);
temperature1.convertToF();
console.log(temperature1);
console.log('<========================================================= PRECIPITATION OBJECT TEST ==================================================================>')
console.log(precipitation1);
console.log('<========================================================= WIND OBJECT TEST ==================================================================>')
console.log(wind1);
console.log('<========================================================= CLOUD COVERAGE OBJECT TEST ==================================================================>')
console.log(cloudCoverage);
console.log('<========================================================= WEATHER PREDICTION OBJECT TEST ==================================================================>')
const weatherPrediction1 = new WeatherPrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
console.log(weatherPrediction1.matches(weatherData1));
const weatherData2 = new WeatherData('September 13, 2021 14:11:00', 'Lancaster', 999, 'Celsius', '*C');
console.log(weatherPrediction1.getMin(weatherData2));
console.log(weatherPrediction1.getMax(weatherData2));
console.log('<========================================================= TEMPERATURE PREDICTION OBJECT TEST ==================================================================>')
const temperaturePrediction2 = new TemperaturePrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Celsius', '*C');
console.log(temperaturePrediction2);
temperaturePrediction2.convertToF();
console.log(temperaturePrediction2.getValue());
console.log('<========================================================= PRECIPITATION PREDICTION OBJECT TEST ==================================================================>')
const precipitationPrediction1 = new PrecipitationPrediction('November 2, 2021 14:11:00', 'Dublin', 25, 'Celsius', '*C', ['rain', 'wind', 'plague']);
console.log(precipitationPrediction1);
console.log(precipitationPrediction1.getExpectedTypes());
precipitationPrediction1.convertToInches();
console.log(precipitationPrediction1.getValue());
precipitationPrediction1.convertToMM();
console.log(precipitationPrediction1.getValue());
const weatherData3 = new WeatherData('November 2, 2021 14:11:00', 'Dublin', 25, 'Celsius', '*C');
console.log(precipitationPrediction1.matches(weatherData3));
console.log('<========================================================= WIND PREDICTION OBJECT TEST ==================================================================>')
const windPrediction1 = new WindPrediction('September 13, 2021 14:11:00', 'Monte Casino', 30, 'Miles per Hour', 'MPH', ['North', 'South']);
console.log(windPrediction1);
const weatherData4 = new WeatherData('September 12, 2021 14:11:00', 'Monte Casino', 30, 'Meters per Second', 'MS')
console.log(windPrediction1.matches(weatherData4));
windPrediction1.convertToMPH();
console.log(windPrediction1.getValue());
windPrediction1.convertToMPS();
console.log(windPrediction1.getValue());
console.log('<========================================================= CLOUD COVERAGE PREDICTION OBJECT TEST ==================================================================>')
const cloudCoveragePrediction1 = new CloudCoveragePrediction('September 12, 2021 14:11:00', 'Monte Casino', 30, 'Meters per Second', 'MS', 'dense');
console.log(cloudCoveragePrediction1);
console.log(cloudCoveragePrediction1.getCloudCoverage());


class WeatherHistory {
    constructor(data) {
        this.data = data;
    }

    forPlace = (place) => {
        let weatherHistoryOfPlace = [];
        this.data.forEach((element) => {
            if (element.getPlace() === place) {
                weatherHistoryOfPlace.push(element);
            }
        });
        return new WeatherHistory(weatherHistoryOfPlace);
    }
    forType = (type) => {
        let weatherHistoryOfType = [];
        this.data.forEach((element) => {
            if (element.getType() === type) {
                weatherHistoryOfType.push(element);
            }
        });
        return new WeatherHistory(weatherHistoryOfType);
    };
    forPeriod = (period) => {
        let weatherHistoryForPeriod = [];
        this.data.forEach((element) => {
                if (period.getDateFrom().getTime() <= element.getDate().getTime() &&
                    element.getDate().getTime() <= period.getDateTo().getTime())
                    weatherHistoryForPeriod.push(element);
            }
        );
        return new WeatherHistory(weatherHistoryForPeriod);
    };
    including = (weatherData) => {
        let weatherDataForComparison = [];
        this.data.forEach(element => {
            weatherData.forEach((comparisonElement => {
                if (Object.keys(element).length === Object.keys(comparisonElement).length
                    && Object.keys(element).every(p => element[p] === comparisonElement[p])) {
                    weatherDataForComparison.push(element);
                }
            }));
        });
        return new WeatherHistory(weatherDataForComparison);
    };
    convertToUsUnits = () => {
        this.data.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    convertToInternationalUnits = () => {
        this.data.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    lowestValue = () => this.data.reduce((previous, current) => previous.getValue() < current.getValue() ? previous : current);
    getData = () => this.data.weatherDataSet;
    setData = (weatherData) => this.data.weatherDataSet.concat(weatherData);
}

const weatherSet = [
    new WeatherData(new Date('1000-01-01'), 'Kiev', 100, CELSIUS_TYPE, CELSIUS_UNIT),
    new WeatherData(new Date('2011-01-01'), 'Dniepr', 200, CELSIUS_TYPE, CELSIUS_UNIT),
]
const weatherHistory1 = new WeatherHistory(weatherSet);
console.log(
    weatherHistory1.lowestValue().getValue()
);


class WeatherForecast {
    constructor(data) {
        this.weatherForecastsSet = data;
    }

    forPlace = (place) => {
        let weatherForecastOfPlace = [];
        this.weatherForecastsSet.forEach((element) => {
            if (element.getPlace() === place) {
                weatherForecastOfPlace.push(element);
            }
        });
        return new WeatherForecast(weatherForecastOfPlace);
    }
    forType = (type) => {
        let weatherHistoryOfType = [];
        this.weatherForecastsSet.forEach((element) => {
            if (element.getType() === type) {
                weatherHistoryOfType.push(element);
            }
        });
        return new WeatherForecast(weatherHistoryOfType);
    };
    forPeriod = (period) => {
        let weatherForecastForPeriod = [];
        this.weatherForecastsSet.forEach((element) => {
                if (period.getDateFrom().getTime() <= element.getDate().getTime() &&
                    element.getDate().getTime() <= period.getDateTo().getTime())
                    weatherForecastForPeriod.push(element);
            }
        );
        return new WeatherForecast(weatherForecastForPeriod);
    };
    including = (forecastData) => {
        let forecastsDataForComparison = [];
        this.weatherForecastsSet.forEach(element => {
            forecastData.forEach((comparisonElement => {
                if (Object.keys(element).length === Object.keys(comparisonElement).length
                    && Object.keys(element).every(p => element[p] === comparisonElement[p])) {
                    forecastsDataForComparison.push(element);
                }
            }));
        });
        return new WeatherForecast(forecastsDataForComparison);
    };
    convertToUsUnits = () => {
        this.weatherForecastsSet.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    convertToInternationalUnits = () => {
        this.weatherForecastsSet.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    getAverageMinValue = () => {
        let avgMinNumber = 0;
        this.weatherForecastsSet.forEach(element => {
            if (element.getMin() !== undefined) {
                avgMinNumber += element.getMin();
            }
            return avgMinNumber / this.weatherForecastsSet.length;
        });
    }
    getAverageMaxValue = () => {
        let avgMaxNumber = 0;
        this.weatherForecastsSet.weatherPredictionSet.forEach(element => {
            if (element.getMax() !== undefined) {
                avgMaxNumber += element.getMax();
            }
            return avgMaxNumber / this.weatherForecastsSet.length;
        });
    };
    getPredictions = () => this.weatherForecastsSet.weatherPredictionSet;
    setData = (forecastData) => this.weatherForecastsSet.concat(forecastData);
}
//TODO: remaining tests