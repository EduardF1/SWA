const DateInterval = (from, to) => {
    let state = {from: from, to: to};
    const setFrom = (newDateFrom) => state.from = newDateFrom;
    const getFrom = () => state.from;
    const setTo = (dateFrom) => state.to = dateFrom;
    const getTo = () => state.to;
    const contains = (d) => (state.from.getTime() <= d.getTime() && d.getTime() <= state.to.getTime());
    return Object.assign({}, {setFrom, getFrom, setTo, getTo, contains});
}

module.exports = {
    DateInterval
}