// Rewrite the following functions using map, filter and reduce.
/*
    a)  function names(persons) {
            let ns = []
            for (let i = 0; i < persons.length; i++) {
                ns.push(person[i].name)
            }
            return ns
       }
 */
const names = (persons) => persons.map(person => person.name);

/*
    b)  function adults(persons) {
            let as = []
            for (let i = 0; i < persons.length; i++) {
                if (persons[i].age >= 18) {
                    as.push(persons[i])
                }
            }
            return as
        }
 */
const adults = (persons) => persons.filter(person => person.age >= 18);

/*
    c)  function oldest_person(persons) {
            let oldest = null
            for (let i = 0; i < persons.length; i++) {
                if (!oldest || persons[i].age > oldest.age) {
                    oldest = person[i]
                }
            }
            return oldest
        }
 */
const oldest_person = (persons) => Math.max(...persons.map(element => element.age));

/*
    d)  function total_salaries_of_seniors(employees) {
            let total = 0
            for (let i = 0; i < persons.length; i++) {
            if (persons[i].age >= 60) {
                total += persons[i].salary
            }
        }
            return total
        }
 */
const total_salaries_of_seniors = (employees) =>employees.filter(employee => employee.age >= 60).reduce((salaries, employee) => (salaries += employee.salary), 0);

module.exports = {
    names,
    adults,
    oldest_person,
    total_salaries_of_seniors
}