/**
 * DateInterval class.
 * Has as attributes/properties "to" and "from" (both are dates).
 * Has getters and setters for all attributes and a "contains()" method that determines whether a given date, "dateToCheck" is
 * within the values of "to" and "from" (values evaluated in milliseconds since the epoch).
 */
class DateInterval {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    setFrom = (from_) => this.from = from_;
    getFrom = () => this.from;
    setTo = (to_) => this.to = to_;
    getTo = () => this.to;
    contains = (dateToCheck) => (this.from.getTime() <= dateToCheck.getTime() && dateToCheck.getTime() <= this.to.getTime());
}

module.exports = {
    DateInterval
}