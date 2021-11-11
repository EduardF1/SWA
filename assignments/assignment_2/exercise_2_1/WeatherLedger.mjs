import {CELSIUS_TYPE, FAHRENHEIT_TYPE, MM_TYPE, MPS_TYPE} from "../../../Constants.js";

export function WeatherLedger(data) {
    this.data = data;
}

WeatherLedger.prototype = {
    forPlace: function (place) {
        return new WeatherLedger(this.data.filter(element => element.getPlace() === place));
    },
    forType: function (type) {
        return new WeatherLedger(this.data.filter(element => element.getType() === type));
    },
    forPeriod: function (period) {
        return new WeatherLedger(this.data.filter(element => period.contains(element.getTime())));
    },
    including: function (data) {
        return new WeatherLedger(data.every(element => this.data.includes(element)));
    },
    convertToUsUnits: function () {
        return new WeatherLedger(
            this.data.forEach(element => {
                switch (element.getType()) {
                    case CELSIUS_TYPE:
                        return element.convertToF();
                    case MM_TYPE:
                        return element.convertToInches();
                    case MPS_TYPE:
                        return element.convertToMPH();
                    default:
                        break;
                }
            })
        )
    },
    convertToInternationalUnits: function () {
        return new WeatherLedger(
            this.data.forEach(element => {
                switch (element.getType()) {
                    case FAHRENHEIT_TYPE:
                        return element.convertToC();
                    case IN_TYPE:
                        return element.convertToMM();
                    case MPH_TYPE:
                        return element.convertToMPS();
                    default:
                        break;
                }
            })
        )
    },
    getData: function () {
        return this.data;
    }
}