const WeatherLedger = (data) => {
    let state = {data: data};
    const forPlace = (place) => {
        let weatherHistoryOfPlace = [];
        state.weatherDataSet.forEach((element) => {
            if (element.getPlace() === place) {
                weatherHistoryOfPlace.push(element);
            }
        });
        return WeatherLedger(weatherHistoryOfPlace);
    };
    const forType = (type) => {
        let weatherHistoryOfType = [];
        state.weatherDataSet.forEach((element) => {
            if (element.getType() === type) {
                weatherHistoryOfType.push(element);
            }
        });
        return WeatherLedger(weatherHistoryOfType);
    };
    const forPeriod = (period) => {
        let weatherHistoryForPeriod = [];
        state.weatherDataSet.forEach((element) => {
                if (period.getDateFrom().getTime() <= element.getDate().getTime() &&
                    element.getDate().getTime() <= period.getDateTo().getTime())
                    weatherHistoryForPeriod.push(element);
            }
        );
        return WeatherLedger(weatherHistoryForPeriod);
    };
    const including = (weatherData) => {
        let weatherDataForComparison = [];
        state.weatherDataSet.forEach(element => {
            weatherData.forEach((comparisonElement => {
                if (Object.keys(element).length === Object.keys(comparisonElement).length
                    && Object.keys(element).every(p => element[p] === comparisonElement[p])) {
                    weatherDataForComparison.push(element);
                }
            }));
        });
        return WeatherLedger(weatherDataForComparison);
    };
    const convertToUsUnits = () => {
        state.weatherDataSet.forEach((element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case MM_TYPE:
                    element.setUnit(IN_UNIT);
                    element.setType(IN_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPS_TYPE:
                    element.setUnit(MPH_UNIT)
                    element.setType(MPH_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    const convertToInternationalUnits = () => {
        state.weatherDataSet.forEach((element => {
            switch (element.getType()) {
                case FAHRENHEIT_TYPE:
                    element.setUnit(CELSIUS_UNIT);
                    element.setType(CELSIUS_TYPE);
                    element.setValue((element.getValue() * 9 / 5) + 32);
                    break;
                case IN_TYPE:
                    element.setUnit(MM_UNIT);
                    element.setType(MM_TYPE);
                    element.setValue(element.getValue() * 25.4);
                    break;
                case MPH_TYPE:
                    element.setUnit(MPS_UNIT)
                    element.setType(MPS_TYPE);
                    element.setValue(element.getValue() * 2.237)
                    break;
                default:
                    break;
            }
        }));
    };
    return Object.assign({}, state.data, {forPlace, forType, forPeriod, including, convertToInternationalUnits, convertToUsUnits});
}

module.exports = {
    WeatherLedger
}
