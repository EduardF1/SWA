/*
    -   In JS, functions are not just functions, they are also closures, this means that the function body has
    access to variables defined outside the function (scope).
    -   Closures are useful when starting a task/a call and use some resource available through global (script) scope.
 */

let character = "Batman";
function greet() {
    console.log('Hello, ' + character + '!');
}
character = "Captain America";
greet();