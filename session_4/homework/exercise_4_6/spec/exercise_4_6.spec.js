const {names, adults, total_salaries_of_seniors} = require('../../exercise_4_6/exercise_4_6');

describe('Suite for testing the names, adults, total_salaries_of_seniors functions', () => {
    // Setup
    let persons = [
        {
            name: 'Jonathan',
            age: 22,
            salary: 1000
        },
        {
            name: 'Karl',
            age: 72,
            salary: 1000000
        },
        {
            name: 'Michael',
            age: 61,
            salary: 99000
        },
        {
            name: 'Jan',
            age: 11,
            salary: 10
        }
    ];

    it('should be possible to use names() to retrieve all the names of the persons', () => {
        // Arrange
        let namesOfPersons;
        // Act
        namesOfPersons = names(persons);
        // Assert
        expect(namesOfPersons).toEqual([persons[0].name, persons[1].name, persons[2].name, persons[3].name]);
    });

    it('should be possible to use adults() to retrieve all the adults', () => {
        // Arrange
        let namesOfPersons;
        // Act
        namesOfPersons = adults(persons);
        // Assert
        expect(namesOfPersons).toEqual([persons[0], persons[1], persons[2]]);
    });

    it('should be possible to use total_salaries_of_seniors() to retrieve all the salaries of seniors', () => {
        // Arrange
        let salariesOfSeniors;
        // Act
        salariesOfSeniors = total_salaries_of_seniors(persons);
        // Assert
        expect(salariesOfSeniors).toEqual(persons[1].salary + persons[2].salary);
    });
});