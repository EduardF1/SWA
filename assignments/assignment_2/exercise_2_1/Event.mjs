export function Event(time, place) {
    this.time = time;
    this.place = place;
}

Event.prototype = {
    setTime: function (newTime) {
        this.time = newTime;
    },
    getTime : function () {
        return this.time;
    },
    setPlace: function (newPlace) {
        this.place = newPlace;
    },
    getPlace: function () {
        return this.place;
    }
}

