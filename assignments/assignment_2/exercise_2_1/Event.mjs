/**
 * Constructor function for the Event "class".
 * @param time (Date) The time at which the measurement occurred.
 * @param place (String) The location at which the measurement occurred.
 * @constructor
 */
export function Event(time, place) {
    this.time = time;
    this.place = place;
}

/**
 * The prototype of the Event "class", all subclasses will inherit the below methods.
 * @type {
 *          {
 *              getTime: (function(): *),
 *              getPlace: (function(): *),
 *              setPlace: Event.setPlace,
 *              setTime: Event.setTime
 *           }
 *        }
 */
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
};