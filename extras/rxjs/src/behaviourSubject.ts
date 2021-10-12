import {BehaviorSubject} from "rxjs";
import {addItem} from "./addItem";

const subject = new BehaviorSubject('Initial value');

subject.subscribe({
    next: data => addItem('Observer 1: ' + data),
    error: error => addItem(error),
    complete: () => addItem('Observer 1 Completed')
});

subject.next('The first value has been sent');
subject.next('...Observer 2 is about to subscribe...')

const observer2 = subject.subscribe({
    next: data => addItem('Observer 2: ' + data),
    error: error => addItem(error),
    complete: () => addItem('Observer 2 Completed')
});

subject.next('The second value has been sent');
subject.next('The third value has been sent');

observer2.unsubscribe();

subject.next('A final value has been sent');

