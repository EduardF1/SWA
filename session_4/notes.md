# Functional Programming
- Everything is based on functions and data.
- OOP: objects have data and functions (methods) within
- Functions: data -> data, does nothing else and does not depend on environment. ("pure function")

# Pure functions
- Better at composability
- Better at testability (on a specific input, get a specific output)
- Easier to reason about
- Parallelization (in Big Data, parallelize data processing)

# Impure functions
- Easier
- They actually do something
- Writing to a DB, displaying stuff in the UI, etc...

# Functional style
- Mostly pure functions such as `f`, `g`, `etc...`.
- We then have some variables `x = f(x)`, `y = g(x,y)`

# Higher-order functions
- Functions are 1st class citizens (anything that can be used as a variable)
- 1st class citizen (and higher order function):
  - Store in a variable, take as parameter 
  - Return from a function
  - Take as param