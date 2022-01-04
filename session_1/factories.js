// ex. of a factory function
function sequence(x) {
    const originalX = x;

    function next() {
        x++;
        return x;
    }

    function reset() {
        x = originalX;
    }

    return {
        next: next,
        reset: reset
    }
}

let n = sequence(0);
console.log(n.next());
console.log(n.next());
console.log(n.next());

// Closure: function that understands its surrounding scope.

/*
class Sequence {
    private int x;
    private int originalX;

    public Sequence(int x){
        this.x = x;
        originalX = x;
    }

    public int next(){
        x++;
        return x;
    }

    public void reset(){
        x = originalX;
    }
}
 */

// Rules of factory functions
// #1: The signature of the factory function should be the signature of the constructor
// #2: The local variables that are not already in the signature constructor should be local variables
// #3: The methods should be functions
// #4: The factory function must return an object with all the public members (usually methods)

// Alternative syntax (syntactic sugar):
function sequence__(x) {
    const originalX = x;

    return {
        next() {
            x++;
            return x;
        },
        reset() {
            x = originalX;
        }
    }
}