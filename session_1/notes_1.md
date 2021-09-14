# Brief
1) Instructor: Ole Ildsgaard Hougaard - worked on the V8 engine for JS
2) 4 parts
    - Language and paradigms
    - Asynchronous programming
    - Client programming
    - Network communication
3) Each 3 weeks, course assignment.
4) Examination: 8 questions (already uploaded), use course assignments to explain concepts.

# Notes
- JS is a multi paradigm language.
- Async programming (calling a server).
- NodeJS: server-side JS programming and running JS outside the browser.
- JS does not know about variable types
- "Undefined" used for classifying unrecognized types, undefined properties.
- "Var" used before 2015 had some weird intricacies.
- Let - mutable variable declaration.
- Const - immutable variable declaration.
- "Null" is nothing, "undefined" is something (unclassified) 
- Functions are values. (They work as objects)
- Dynamic typing:
```
Changing the type by inference
let x = 2;
x = "7";
x / 2 ; // Out: 3.5
x + 2 ; // Out: '72'
x = 'seven'
x / 2; // NaN (standard in all programming languages)
typeof x / 2; // Out: NaN
typeof (x / 2); // Out: 'number'

// object declaration
let o = {
   x:100,
   y:200
};

o.z = null;

undefined == null; // true
undefined === null; // false

```
The problem we were trying to solve:
- Use the `this` keyword.
```
let rect = {
   x:100,
   y:200,
   m: function(){
      return this.x+this.y;
   }
}

rect.m(); // the call looks at the shape of the call
```