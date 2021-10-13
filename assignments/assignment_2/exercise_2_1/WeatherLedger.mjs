import {CELSIUS_TYPE, CELSIUS_UNIT, FAHRENHEIT_TYPE, FAHRENHEIT_UNIT, MM_TYPE, MM_UNIT, MPS_TYPE, MPS_UNIT} from "../../../Constants.js";

export function WeatherLedger(data) {
    this.data = data;
}

WeatherLedger.prototype = {
    forPlace: function (place) {
        return this.data.filter(element => element.getPlace() === place);
    },
    forType: function (type) {
        return this.data.filter(element => element.getType() === type);
    },
    forPeriod: function (period) {
        return this.data.filter(element => period.contains(element.getTime()));
    },
    including: function (data) {
        return data.every(element => this.data.includes(element));
    },
    convertToUsUnits: function () {
        this.data.forEach(element => {
            switch (element.getType()) {
                case CELSIUS_TYPE:
                    element.setUnit(FAHRENHEIT_UNIT);
                    element.setType(FAHRENHEIT_TYPE);
                    element.setValue((element.getValue() * 1.8) + 32);
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
        })
    },
    convertToInternationalUnits: function () {
        this.data.forEach(element => {
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
        })
    },
    getData: function () {
        return this.data;
    }
}