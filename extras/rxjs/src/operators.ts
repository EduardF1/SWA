import {merge, map, Observable, pluck, from, Subject, skipUntil} from "rxjs";
import {addItem} from "./addItem";

const observable = new Observable((observer: any) => {
    observer.next('Hello...RxJS')
});

const observable2 = new Observable((observer: any) => {
    observer.next('Marvellous RxJS')
});

const newObservable = merge(observable, observable2);

newObservable.subscribe((x: any) => addItem(x));

const observable3 = new Observable((observer: any) => {
    observer.next('RxJS demystified')
}).pipe(
    map((val: any) => val.toUpperCase())
).subscribe(
    (x: any) => addItem(x)
);

const observable4 = from([
    {first: 'Gary', last: 'Vaynerchuk', age: 45},
    {first: 'Larry', last: 'Larman', age: 100},
    {first: 'Koseph', last: 'Okiker', age: 12}
]).pipe(
    pluck('first')
).subscribe(
    (x:any) => addItem(x)
);

const observable5 = new Observable((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000)
})

const observable6 = new Subject();
setTimeout(()=> {
    observable6.next('X-X-X-X');
}, 5000)

const newObservable2 = observable5.pipe(skipUntil(observable6));

observable6.subscribe((x: any) => addItem(x));
newObservable2.subscribe((x: any) => addItem(x));
