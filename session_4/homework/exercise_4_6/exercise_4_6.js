// a)
const reduce = (array, operator, defaultValue) => {
    let accumulator = defaultValue === undefined ? 0 : defaultValue
    // loop though array
    for (let i = 0; i < array.length; i++)
        accumulator = operator(accumulator, array[i], i, array);
    return accumulator;
}
// b) map
const map = (array, mapFunc) => {
    const defaultValue = [];
    // loop though array
    for (let i = 0; i < array.length; i++) {
        const result = mapFunc(array[i], i, array);
        defaultValue.push(result);
    }
    return defaultValue;
}
// c) filter
const filter = (array, filterFunc) => {
    const defaultValue = [];
    // loop though array
    for (let i = 0; i < array.length; i++) {
        const result = filterFunc(array[i], i, array);
        if (result) defaultValue.push(array[i]);
    }
    return defaultValue;
}

// Second part
const names = (persons) => map(persons, person => person.name);
const adults = (persons) => filter(persons, person => person.age >= 18);
const total_salaries_of_seniors = (employees) => reduce(employees, filter(employees, employee => employee.age >= 60),1);
