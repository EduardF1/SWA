// a)
Array.prototype.customReduce = function (callback, initialValue) {
    if (!callback || typeof callback !== 'function') {
        throw Error('The callback provided is not a function');
    }

    if (!this) {
        throw Error('Cannot call forEach on null or undefined');
    }

    let accumulator = initialValue || this[0];

    for (let i = 0; i < this.length; i++) {
        if (i === 0 && !initialValue) {
            continue;
        }

        const newValue = callback(accumulator, this[i], i, this);
        accumulator = newValue;
    }
    return accumulator;
}
// b) map
Array.prototype.customMap = function (callback) {
    if (!callback || typeof callback !== 'function') {
        throw Error('The callback provided is not a function');
    }

    if (!this) {
        throw Error('Cannot call forEach on null or undefined');
    }

    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const newValue = callback(this[i], i, this);
        newArray.push(newValue);
    }
    return newArray;
}
// c) filter
Array.prototype.customFilter = function (callback) {
    if (!callback || typeof callback !== 'function') {
        throw Error('The callback provided is not a function');
    }

    if (!this) {
        throw Error('Cannot call forEach on null or undefined');
    }

    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const isPassingTest = callback(this[i], i, this);

        if (isPassingTest) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}
// d) foreach
Array.prototype.customForEach = function (callback) {
    if (!callback || typeof callback !== 'function') {
        throw Error('The callback provided is not a function');
    }

    if (!this) {
        throw Error('Cannot call forEach on null or undefined');
    }

    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

// Second part
const names = (persons) => persons.customMap(element => element.name);
const adults = (persons) => persons.customFilter(person => person.age >= 18);
const total_salaries_of_seniors = (array) =>
    array.customFilter(element => element.age >= 60)
         .customMap(element => element.salary)
         .customReduce((acc, elem) => acc + elem);

module.exports = {
    names,
    adults,
    total_salaries_of_seniors
}