class DateInterval {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    setFrom = (newFrom) => this.from = newFrom;
    getFrom = () => this.from;
    setTo = (newTo) => this.to = newTo;
    getTo = () => this.to;
    contains = (d) => (this.from.getTime() <= d.getTime() && d.getTime() <= this.to.getTime());
}

module.exports = {
    DateInterval
}