/**
 * Constructor function for the Event "class" (factory function implementation approach).
 * @param state Variable (object) containing the initialization state for Event objects.
 * @returns {{
 *              getTime: (function(): Date),
 *              getPlace: (function(): *),
 *              setPlace: (function(*): *),
 *              setTime: (function(*): *)
 *           }}
 * @constructor
 */
const Event = (state) => {
    const getTime = () => new Date(state.time);
    const setTime = (newTime) => state.time = newTime;
    const getPlace = () => state.place;
    const setPlace = (newPlace) => state.place = newPlace;
    // Return a new object (initially empty) to which the defined functions are assigned.
    return Object.assign({}, {getTime, setTime, setPlace, getPlace});
}

module.exports = {
    Event
}

