import {Observable} from "rxjs";
import {share} from 'rxjs/operators';
import {addItem} from "./addItem";

// create an observable (Hot)
const observable = new Observable((observer: any) => {
    try {
        observer.next('Hello from observable.');
        observer.next('How are you enjoying RxJS ?.');
        setInterval(() => {
            observer.next('RxJS.'); // emit every 2 s
        }, 2000);
        // observer.complete();
        // observer.next('This will not be sent');
    } catch (error) {
        observer.error(error);
    }
}).pipe(share());

// subscribe to an observable
const observer = observable.subscribe({
    next: (x: any) => addItem('Subscriber 1: ' + x),
    error: (error: any) => addItem(error),
    complete: () => addItem('Completed')
});


setTimeout(() => {
    const observer2 = observable.subscribe({
        next: (x: any) => addItem('Subscriber 2: ' + x),
    });
}, 1000);
