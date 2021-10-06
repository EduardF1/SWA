// wrapper for event and datatype
export function EventDataType(time, place, type, unit) {
    this.time = time;
    this.place = place;
    this.type = type;
    this.unit = unit;
}

EventDataType.prototype = {
    setTime: function (newTime) {
        this.time = newTime;
    },
    getTime: function () {
        return this.time;
    },
    setType: function (newType) {
        this.type = newType;
    },
    getType: function () {
        return this.type;
    }
}