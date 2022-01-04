// Methods
// Methods are functions which are members of objects

const rect = {
    width: 100,
    height: 200,
    area: function () {
        return this.width * this.height;
    }
};

console.log(rect.area());
// Java/C#
// class Rectangle ...
//
// Rectangle rect = new Rectangle(100,200);
// Calling the constructor. `this` refers to the newly created Rectangle object.
//
// rect.area(); // `this` refers to recipient: rect

// JavaScript:
// Same, but JS is dynamic
// Problem:
let rectArea = rect.area // reference object function to a variable
// Has no context:
console.log(rectArea()) // reference function variable call

// The *call* decides the context - not the object or function

// Solutions:
// 1) - Use call(), use rect as a value for the function call
console.log(rectArea.call(rect))
// 2) - Use bind()
rectArea = rect.area.bind(rect)
console.log(rectArea())

// button.onclick = rect.area
// 3) - Use anonymous functions (most common solution)
rectArea = () => rect.area()
// button.onclick = () => rect.area()

