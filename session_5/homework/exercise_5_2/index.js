console.log("1st Function");

// Web API component
setTimeout(() => {
   console.log("2nd Function");
}, 1000);

console.log("3rd Function");

/*
   The synchronous "functions", function 1 and 3 execute first and function 2 is last.
 */