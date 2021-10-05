// Controls how a set of objects interact
function Member(name) {
    this.name = name;
    this.chatroom = null;
}

Member.prototype = {
    send: function (message, toWho) {
        this.chatroom.send(message, this, toWho);
    },
    receive: function (message, fromWho) {
        console.log(`${fromWho.name} to ${this.name}: ${message}`);
    }
}

// Mediator object
function Chatroom() {
    this.members = {};
}
Chatroom.prototype = {
    addMember: function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function (message, fromWho, toWho) {
        toWho.receive(message, fromWho);
    }
}

const chat = new Chatroom();
const bobby = new Member('Bobby');
const carl = new Member('Carl');
const sweet = new Member('Sweet');

chat.addMember(bobby);
chat.addMember(carl);
chat.addMember(sweet);

bobby.send('Hi Carl', carl);
carl.send('Sup ?', sweet);
sweet.send("Let's roll, Bob", bobby);