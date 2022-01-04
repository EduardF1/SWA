/*
    Prototypal inheritance
 */

// Constructor (factory function) for the "Person" class.
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        firstName,
        lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

// The below methods are defined on the constructor's prototype.
Person.prototype = {
    getFullName: function () {
      return this.name.firstName + ' ' + this.name.lastName;
    },
    getFirstName: function () {
        return this.name.firstName;
    },
    getLastName: function () {
        return this.name.lastName;
    },
    getAge: function () {
      return this.age;
    },
    getGender: function () {
      return this.gender;
    },
    getInterests: function () {
      return this.interests;
    },
    setFirstName: function (firstName_) {
        this.name.firstName = firstName_;
    },
    setLastName: function (lastName_) {
        this.name.lastName = lastName_;
    },
    setGender: function (gender_) {
        this.gender = gender_;
    },
    setAge: function (age_) {
        this.age = age_;
    },
    setInterests: function (interests_) {
        this.interests = interests_;
    },
    toString: function () {
        return "Person info: " +
            "age='" + this.age + '\'' +
            ", firstName='" + this.getFirstName() + '\'' +
            ", lastName='" + this.getLastName() + '\'' +
            ", fullName='" + this.getFullName() + '\'' +
            ", age=" + this.age +
            ", interests=" + this.interests;
    }
}

const person1 = new Person('Carl', 'Johnson', 30, 'M', 'reading, attending the opera, watching series');
console.log(person1.toString());

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.toString = function () {
    return "Person info: " +
        "age='" + this.age + '\'' +
        ", firstName='" + this.getFirstName() + '\'' +
        ", lastName='" + this.getLastName() + '\'' +
        ", fullName='" + this.getFullName() + '\'' +
        ", age=" + this.age +
        ", interests=" + this.interests +
        ", subject=" + this.subject;
}

const teacher1 = new Teacher('Big', 'Smoke', 35, 'M', 'gastronomy, science, sports', 'cooking');
console.log(teacher1.toString());
teacher1.setAge(22);
console.log(teacher1.toString());

// Concatenative inheritance (function aggregation).
const {Event} = require("../../assignments/assignment_1/src/factories/Event.js");
const {DataType} = require("../../assignments/assignment_1/src/factories/DataType.js");
const {WeatherData} = require("../../assignments/assignment_1/src/factories/WeatherData.js");
const {PLACES, START_DATE, VALUES, CELSIUS_UNIT, CELSIUS_TYPE} = require("../../Constants");

const event1 =  Event({place: 'Milan', time: '1940-01-01'});
const dataType1 =  DataType({unit: CELSIUS_UNIT, type: CELSIUS_TYPE});
const weatherData1 =  WeatherData({place:PLACES[0], time:new Date(START_DATE), type:CELSIUS_TYPE,unit: CELSIUS_UNIT, value:VALUES[9]});

console.log(event1);
console.log(dataType1);
console.log(weatherData1);
