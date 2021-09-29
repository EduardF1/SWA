const DateInterval = (from, to) => {
    const setFrom = (newDateFrom) => from = newDateFrom;
    const getFrom = () => from;
    const setTo = (dateFrom) => to = dateFrom;
    const getTo = () => to;
    const contains = (d) => (from.getTime() <= d.getTime() && d.getTime() <= to.getTime());
    return Object.assign({}, {setFrom, getFrom, setTo, getTo, contains});
}

module.exports = {
    DateInterval
}