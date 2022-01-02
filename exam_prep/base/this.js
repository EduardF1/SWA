// "this", infers the context in which it is used. Determined at the time of the call.
let talk = function () {
    console.log(this.sound);
}
let boromir = {
    speak: talk,
    sound: 'One does not simply walk into Mordor!',
}

let talkBoundToBoromir = talk.bind(boromir); // a copy of the original "talk" function giving value to the "this" keyword.
talk();
talkBoundToBoromir();
boromir.speak(); // call the "speak" property of the boromir object.