/**
 *  public class Sequence {
 *
 *  private int x;
 *  private int originalX;
 *
 *  public Sequence(int x){
 *          this.x = x;
 *          this.originalX = x;
 *  }
 *
 *  public synchronized int next() {
 *      return x++;
 *  }
 *
 *  public void reset(){
 *      x = originalX;
 *  }
 *  }
 *
 *  Sequence s = new Sequence(0);
 *                              object that has a reference to its functions
 *  s.next(); -> s->next(s); -> s : {x:0, orig.: 0} - V table -> { next, reset} // int next(sequence this){this....}
 */

class Sequence {
    constructor(x) {
        this.x = x;
        this.originalX = x;
    }

    next() {
        return this.x++;
    }

    reset() {
        this.x = this.originalX;
    }
}

// early JS (which x ?, the one in scope), needs to be called with new
function Sequence(x) {
    this.next = function () {
        return x++;
    }
}

/**
 * let s = new Sequence(0)
 * s.next -> function() 'this is the closure' -> x:0
 */

// does not need call with new
function sequence(x) {
    let next = function () {
        return x++;
    }

    return {next}
}

// a callback is an event listener where the event is the server response
// promises: 'I'm not done yet but here's some code to do your stuff', an abstraction layer for a future value. When the future value comes, call the callback, done with 'then'.
// An async func. always returns a promise