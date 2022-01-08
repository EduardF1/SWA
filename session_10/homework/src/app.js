import {
    map,
    scan,
    from,
    delay,
    timer,
    filter,
    takeWhile,
    fromEvent
} from 'rxjs';
import axios from 'axios';

// UI elements
const h6 = document.querySelector('h6');
const ul = document.querySelector('ul');
const paragraph = document.querySelector('p');
const button = document.querySelector('button');
const inputField = document.querySelector('input');
const subscribeButton = document.getElementById('subscribe');
const unsubscribeButton = document.getElementById('unsubscribe');

// Api endpoint
const apiResource = 'http://localhost:8080/warnings';

// Polling interval observable, polls every 1 second
const pollingInterval = timer(1000, 1000);

// Generate <li>
const addBullet = text => {
    const li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
}

// Flag variable to stop the subscription
let unsubscribeFlag = false;

// Button click observables
const subscribeClick$ = fromEvent(subscribeButton, 'click');
const unsubscribeClick$ = fromEvent(unsubscribeButton, 'click');

// Helper function to format the <li> element output.
function formatResponse(warning) {
    return `Id: ${warning.id} --- Severity: ${warning.severity} \n`
        + `Prediction --- from: ${warning.prediction.from} --- place: ${warning.prediction.place} `
        + `time: ${warning.prediction.time} --- to:${warning.prediction.to} --- type: ${warning.prediction.type}`
        + `\n unit: ${warning.prediction.unit}`
        + `${warning.prediction.directions ? '\nDirections: ' + warning.prediction.directions : ''}`
        + `${warning.prediction.precipitation_types ? '\nPrecipitation Types: ' + warning.prediction.precipitation_types : ''}`;
}

// Handle subscribe button click.
subscribeClick$.subscribe(() => {
    // Handle polling subscription
    pollingInterval.subscribe(() =>
        axios.get(apiResource)
            .then((response) => {
                from(response.data.warnings).pipe(
                    takeWhile(() => unsubscribeFlag !== true),
                    delay(1000)
                ).subscribe(
                    warning => {
                        addBullet(formatResponse(warning));
                        h6.innerText = 'Total items: ' + document.getElementById('ul').getElementsByTagName('li').length;
                    }
                );
            })
    );
});

// Handle unsubscribe button click.
unsubscribeClick$.subscribe(() => {
    // handle unsubscribe
    unsubscribeFlag = true;
});

// Exercise 10.2
const getText = () => inputField.value;
const log = (input) => {
    console.log(input);
    return input;
}
const checkOdd = (input) => input % 2 === 0 ? input : 0;

fromEvent(button, 'click')
    .pipe(
        map(getText),
        map(log),
        filter(checkOdd),
        // As with reduce, 0 is the initial value
        scan((count, input) => count + parseInt(input), 0)
    )
    .subscribe(sum => {
        paragraph.textContent = sum;
        console.log("Accumulated odd numbers are:", sum);
    });