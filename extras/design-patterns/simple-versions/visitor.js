// Add new operations/functions to an object without changing the original object signature
function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}
Employee.prototype = {
    getSalary() {
        return this.salary;
    },
    setSalary(newSalary) {
        this.salary = newSalary;
    },
    accept: function (visitorFunction) {
        visitorFunction(this); // this - reference to current object (Employee)
    }
}

const employee1 = new Employee('Carl Johnson', 1000);
console.log(employee1.getSalary());

function ExtraSalary(employee) {
    employee.setSalary(employee.getSalary() * 2);
}
employee1.accept(ExtraSalary);
console.log(employee1.getSalary());
