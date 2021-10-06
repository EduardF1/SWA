import {WeatherLedger} from "./WeatherLedger.mjs";

export function WeatherHistory(data) {
    WeatherLedger.call(this, data);
}

Object.setPrototypeOf(WeatherHistory.prototype, WeatherLedger.prototype);

WeatherHistory.prototype = {
    lowestValue: function () {
        if(this.getData() === undefined || this.getData().length === 0){
            return undefined;
        }
        if (this.getData().map(element => element.getType()).filter((value, index, self) => self.indexOf(value) === index).length > 1){
            return undefined;
        }
        return Math.min(...this.getData().map(element => Number(element.getValue())));
    }
}