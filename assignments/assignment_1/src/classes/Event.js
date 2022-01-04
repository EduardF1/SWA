/**
 * Event class
 * Has two fields/properties, "place" and "time" and getters/setters for both.
 */
class Event {
    constructor(place, time) {
        this.time = time;
        this.place = place;
    }
    getTime = () => this.time;
    setTime = (newTime) => this.time = newTime;

    getPlace = () => this.place;
    setPlace = (newPlace) => this.place = newPlace;
}

module.exports ={
    Event
}