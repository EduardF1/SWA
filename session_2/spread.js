/* the spread operator
    - representation ... , used to stand for the rest of the object/array/parameters
*/

function firstAndRest(first, ...rest) {
    console.log('first: ', first);
    console.log('rest: ' + rest)
}

firstAndRest(0, 1, 2, 3)

const first = 0;
const rest = [1, 2, 3]
const all = [first, ...rest] // [0,1,2,3]
// [first, rest] === [0, [1,2,3]] // called flattening (array nesting)

const obj = {a: 7, b: 'thirtyFour'}
const obj2 = {...obj, c: 'Dog'} // {a: 7, b: 'thirtyFour',c: 'Dog'} .insert the properties of obj into obj2
// { ...obj, b: 'Dog' } === {a: 7, b: 'Dog' }

// Spread destructuring
let {a, b} = obj // shorthand for let a = obj.a and let b = obj.b
let {a, ...obj3} = obj2

/* Why inheritance ?
   - Modelling
   - Reuse:
   ###########      ###############
   #  CAR    #   <- # SPORTS CAR  #
   ###########      ###############

   a) code from superclass
   b) polymorphism (interfaces, at least abstract classes)

   X is a Y => X shows the traits of Y (called a mixin)
   - Kotlin: interfaces and delegation
   - Scala:  Trait
   - C#, Java, Kotlin : Interface with default implementation.
   - JS: DIY (Do it yourself)

*/