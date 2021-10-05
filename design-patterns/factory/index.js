function Developer(name) {
    this.name = name;
    this.type = 'Developer';
}
function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}
function EmployeeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
            default:
                break;
        }
    }
}
function say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create('Patrick', 1));
employees.push(employeeFactory.create('John', 2));
employees.push(employeeFactory.create('Paloma', 1));
employees.push(employeeFactory.create('Fritz', 1));
employees.push(employeeFactory.create('Mike', 1));
employees.push(employeeFactory.create('Lenny', 2));


employees.forEach(employee => {
    say.call(employee);
})