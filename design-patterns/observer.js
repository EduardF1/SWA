function Subject() {
    this.observers = []; // array of observer functions
}

Subject.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    unsubscribe: function (fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove);
    },
    trigger: function () {
        this.observers.forEach(fn => fn.call());
    }
}

const subject = new Subject();
function Observer1() {
    console.log('Observer 1 triggering');
}
function Observer2() {
    console.log('Observer 2 triggering');
}
function Observer3() {
    console.log('Observer 3 triggering');
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.subscribe(Observer3);

subject.trigger();

subject.unsubscribe(Observer2);

subject.trigger();

subject.subscribe(Observer2);

subject.trigger();