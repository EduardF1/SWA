function Person(name, age) {
    this.name = name;
    this.age = age ? age : '';
}

Person.prototype = {
    getName() {
        return this.name
    },
    setName(newName) {
        this.salary = newName
    },
    getAge() {
        return this.age
    },
    setAge(newAge) {
        this.age = newAge
    },
    toString() {
        return `name: ${this.name}, age: ${this.age}`
    },
    equals(person) {
        return this.age === person.age && this.name === person.name
    }
}

function Employee(person, salary) {
    // The call function is an alternative way of declaring a constructor.
    person.age ? Person.call(this, person.name, person.age) : Person.call(this,person.name);
    this.salary = salary
}

Employee.prototype = {
    getSalary() {
        return this.salary
    },
    setSalary(newSalary) {
        this.salary = newSalary
    },
    toString() {
        return `salary: ${this.salary}`;
    },
    equals(employee) {
        return employee.salary === this.salary &&
            employee.age === this.age &&
            employee.name === this.salary;
    }
}
// Make the employee prototype inherit from the person prototype
Object.setPrototypeOf(Employee.prototype, Person.prototype)


// Tests for person
const person1 = new Person('Carlos', 22);
const person2 = new Person('Carlos', 22);
console.log(person1.getName() + ' --- ' + person1.getAge());
console.log(person1.equals(person2));
person2.setAge(100);
person2.setName('Juan');
console.log(person1.equals(person2));
const person3 = new Person('Lenny');
console.log(person3);

// Tests for employee
const employee1 = new Employee(new Person('Martin', 22), 10000);
const employee2 = new Employee(new Person('Lukas', 33), 30000);
const employee3 = new Employee(new Person('Martin', 22), 10000);
console.log(employee1.getSalary() + ' --- ' + employee1.getAge() + ' --- ' + employee1.getName());
console.log(employee3.getSalary() + ' --- ' + employee3.getAge() + ' --- ' + employee3.getName());
console.log(employee1.equals(employee3));
console.log(employee2);
employee2.setSalary(9999999);
employee2.setAge(50);
employee2.setName('Martinez');
console.log(employee2.equals(employee1)); // Expected false
employee4 = new Employee(new Person('Layman'), 10000)
console.log(employee4);
console.log(Person.prototype);
console.log(Employee.prototype);
console.log(Object.getPrototypeOf(Employee.prototype) === Person.prototype)
console.log(employee1.constructor)