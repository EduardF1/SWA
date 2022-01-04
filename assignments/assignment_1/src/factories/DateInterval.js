/**
 * Constructor function for the DateInterval "class" (factory function implementation approach).
 * @param from From Date of the DateInterval.
 * @param to To Date of the DateInterval.
 * @returns {{
 *              contains: (function(*)),
 *              setFrom: (function(*): *),
 *              setTo: (function(*): *),
 *              getTo: (function(): *),
 *              getFrom: (function(): *)
 *           }}
 * @constructor
 */
const DateInterval = (from, to) => {
    const setFrom = (newDateFrom) => from = newDateFrom;
    const getFrom = () => from;
    const setTo = (dateFrom) => to = dateFrom;
    const getTo = () => to;
    const contains = (d) => (from.getTime() <= d.getTime() && d.getTime() <= to.getTime());
    /*
        Returns a new object created with "Object.assign()" to which an initial, empty object is given
        as target and the source object is defined with the function properties of the DateInterval function.
    */
    return Object.assign({}, {setFrom, getFrom, setTo, getTo, contains});
}

module.exports = {
    DateInterval
}