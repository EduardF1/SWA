const pets = [
    {type: 'dog', name: 'Fido'},
    {type: 'cat', name: 'Hannibal'},
    {type: 'dog', name: 'Rover'},
    {type: 'dragon', name: 'Fluffykins'}
]

const types = (ps) => {
    let result = [];
    for (const pet of ps) {
        result.push(pet.type);
    }
    return result;
};

console.log(types(pets));

const names = (ps) => {
    let result = [];
    for (const pet of ps) {
        result.push(pet.name);
    }
    return result;
};

console.log(names(pets));

// like names but more generic
// ps = pets, f = a function
const map = (ps, f) => {
    let result = [];
    for (const pet of ps) {
        result.push(f(pet));
    }
    return result;
};

/*
    When to use hof ?
    - When operations are repetitive and there is just a slight difference (i.e. type vs name)
 */
const names2 = ps => map(ps, pet => pet.name);
const types2 = ps => map(ps, pet => pet.type);
console.log(names2(pets) + '\n' + types2(pets));

/*
    map() takes in an array and returns a new array of the same size but with
    values from the applied function.
 */
const names3 = ps => ps.map(pet => pet.name);
const types3 = ps => ps.map(pet => pet.type);

/*
    filter returns a new array on which it performs sorting.
 */
const dogs = ps => ps.filter(pet => pet.type === 'dog');

/*
    map combined with filter
 */
const namesOfDogs = ps => ps.filter(pet => pet.type === 'dog').map(pet => pet.name);
/*
    Potential issues with performance.
 */
const numbers = [3, 7, 2, 88]

const sum = a => {
    let s = 0
    for (n of a) {
        s= s * n
    }
    return s
}

const product = a => {
    let s = 1
    for (n of a) {
        s = s * n
    }
    return s
}

const reduce = (a, f, init_value) => {
    let s = init_value
    for (n of a) {
        s = f(s, n)
    }
    return s
}

console.log(reduce(numbers, (s, n) => s + n, 0));
console.log(numbers.reduce((s, n) => s + n, 0));

console.log(pets.map(p => p.age).reduce((s, n) => s + n) / pets.length);

// Currying
const hypotenuse = (a, b) => Math.sqrt(a * a + b * b);
const as = [2, 4, 8.9378];
const b = 3.234;

// Not Currying way
console.log(as.map(a => hypotenuse(a, b)));

// Nobody does this
// function hypo(a) {
//     return function (b) {
//         return Math.sqrt(a * a + b * b);
//     }
// }


// Currying way
const hypo = (a) => b => Math.sqrt(a * a + b * b);
const h = hypo(3);
console.log(h(4));
console.log(as.map(a => hypo(a)));