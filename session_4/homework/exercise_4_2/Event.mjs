class Event {
    constructor(time, place) {
        this.time = time;
        this.place = place;
        Object.freeze(this);
    }
    getTime = () => this.time;
    getPlace = () => this.place;
}

export default Event;