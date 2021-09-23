// Mutable:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.name;
    }
}

class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.employees = [];
    }

    getName() {
        return this.name;
    };

    getAddress() {
        return this.address;
    };

    addEmployee(employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee) {
        const index = this.employees.indexOf(employee);
        this.employees.splice(index, 1);
    }

    getEmployee() {
        return [...this.employees];
    }
}

// Immutable
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Object.freeze(this);
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.name;
    }
}

class Company {
    constructor(name, address, employees = []) {
        this.name = name;
        this.address = address;
        this.employees = employees;
        Object.freeze(this);
    }

    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    addEmployee(employee) {
        return new Company(this.name, this.address, [...this.employees, employee]);
    }

    removeEmployee(employee) {
        return new Company(this.name, this.address, this.employees.filter(e => e !== employee));
    }

    getEmployee() {
        return [...this.employees];
    }
}