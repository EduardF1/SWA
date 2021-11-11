import {
  of,
  fromEvent,
  from,
  Observable,
  interval,
  timer,
  range,
  merge,
  concat
} from "rxjs";
import { map, scan, take, delay, mergeMap } from "rxjs/operators";

of(1, 2, 3)
  .pipe(map((x) => x * x))
  .subscribe((data) => console.log(data));

/*
 * The below observable creation is equivalent to the creation of an event listener.
 * Event listener syntax:
 * document.addEventListener('click', () => {
 *   // handle event
 * })
 */
fromEvent(document, "click")
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log(`Clicked ${count} times`));

const values = [1, 2, 3, 4, 5];
const arraySource = from(values);
arraySource.subscribe((value) => console.log(value));

// Create an observable from scratch
const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  throw "This is an error";
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

observable.subscribe(
  // Value emission
  (value) => console.log(value),
  // Error handling
  (err) => console.error(err),
  // Completion
  () => console.log("Completed.")
);

document.body.innerHTML = "<p>Loading...</p>";

const promise = new Promise((resolve, reject) => {
  console.log("Creating Promise");
  setTimeout(() => {
    resolve({
      title: "Revolution",
      message: "The Revolution will mark the change we've been waiting for.",
      duration: 5,
    });
  }, 3000);
});

const observableFromPromise = from(promise);
observableFromPromise.subscribe((data) => {
  document.body.innerHTML = "";
  for (let key in data) {
    document.body.insertAdjacentHTML("beforebegin", "<p>" + data[key] + "</p>");
  }
});

// Output a value from the range [0, 1000] every 1 second
const source = interval(1000);
source.subscribe((value) => console.log("Interval subscription: " + value));

// Output the first 4 values of the source stream/observable
source
  .pipe(take(4))
  .subscribe((value) => console.log("Take subscription: " + value));

// Output the first 4 values of the source stream/observable and add 1 to each
source
  .pipe(
    scan((value) => value + 1, 0),
    take(4)
  )
  .subscribe((value) => console.log("Scan subscription: " + value));

// Output the values within the range [0, 1000] with an initial delay of 1 second
const source2 = timer(1000, 1000);
source2.subscribe((value) => console.log("Timer: " + value));

// Output all values in [1,3]
const rangeSource = range(1, 3);
rangeSource.subscribe((value) => console.log("Range: " + value));

const promise2 = new Promise((resolve, reject) => {
  console.log("Creating Promise");
  setTimeout(() => {
    resolve({
      title: "Revolution",
      message: "The Revolution will mark the change we've been waiting for.",
      duration: 5,
    });
  }, 3000);
});

const observableFromPromise2 = from(promise2);

observableFromPromise2.pipe(
    map((data) => data.duration) // Alternatively, use pluck: pluck('duration')
    ).subscribe((data) => {
  document.body.innerHTML = "";
  document.body.insertAdjacentHTML("beforebegin", "<p>" + data + "</p>");
});

/*
 * "2" and "3" are emitted sequentially and "1" last after a 1 second delay.
 */
const mergeExample = merge(
    of(1).pipe(delay(1000)),
    of(2),
    of(3)
);

mergeExample.subscribe(value => console.log('Merge: ' + value));

/*
 * An initial delay occurs and then the values are sequentially emitted.
 */
const concatExample = concat(
    of(1).pipe(delay(1000)),
    of(2),
    of(3)
);

concatExample.subscribe(value => console.log('Concat: ' + value));

fromEvent(document, 'dblclick').pipe(
    mergeMap(() => interval(1000))
).subscribe(
    value => console.log('Double click (mergeMap):' + value)
)