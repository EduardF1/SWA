const Event = (place, time) => {
    let state = {place: place, time: time};
    const getTime = () => new Date(state.time);
    const setTime = (newTime) => state.time = newTime;
    const getPlace = () => state.place;
    const setPlace = (newPlace) => state.place = newPlace;
    return Object.assign({}, {getTime, setTime, setPlace, getPlace});
}

module.exports = {
    Event
}

