import {Observable} from "rxjs";

// create an observable (Cold)
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
});

// subscribe to an observable
const observer = observable.subscribe({
    next: (x: any) => addItem(x + ' From Observer 1'),
    error: (error: any) => addItem(error),
    complete: () => addItem('Completed')
});

const observer2 = observable.subscribe({
    next: (x: any) => addItem(x + ' From Observer 2'),
});


// create a child subscription, we could also call observer.remove(childRef) to remove a specific child (childRef) of the observer.
observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe(); // unsubscribe after 6.1 s
}, 6001);

function addItem(value: any) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(value);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}