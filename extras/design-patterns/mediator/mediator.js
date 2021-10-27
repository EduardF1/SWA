const Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to)  {
        this.chatroom.send(message, this, to)
    },
    receive: function (message, from)  {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

const Chatroom = function () {
    const participants = [];

    return {
        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                //single message
                to.receive(message, from);
            } else {
                // broadcast message
                for (let key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from)
                    }
                }
            }
        }
    };
};

const mike = new Participant('Mike');
const larry = new Participant('Larry');
const craig = new Participant('Craig');
const jerry = new Participant('Jerry');
const daniel = new Participant('Daniel');
const elaine = new Participant('Elaine');

const chatroom = new Chatroom();

chatroom.register(mike);
chatroom.register(larry);
chatroom.register(jerry);
chatroom.register(craig);
chatroom.register(daniel);
chatroom.register(elaine);

mike.send("How's life in Quebec ?");
larry.send("Omega, Alpha, Beta, Theta...");
elaine.send("Where's George ?");
jerry.send("George's playing with keras.")