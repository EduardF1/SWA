const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// classic for loop
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}
// foreach
companies.forEach(company => console.log(company));

// for loop approach for filtering
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);
// filter
const _canDrink = ages.filter(age => age >= 21);
console.log(_canDrink);
// filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990));
console.log(eightiesCompanies);
const lastedAtLeastTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedAtLeastTenYears);

// map
const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNames);
const squaredAges = ages.map(age => Math.sqrt(age));
const doubledAges = ages.map(age => age * 2);
const squaredAndDoubledAges = ages.map(age => Math.sqrt(age)).map(age => age * 2);
console.log(squaredAges);
console.log(doubledAges);
console.log(squaredAndDoubledAges);

// sort
const sortedCompanies = companies.sort((company1, company2) => {
    if (company1.start > company2.start) {
        return 1;
    } else {
        return -1;
    }
});
console.log(sortedCompanies);
const _sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(_sortedCompanies);

// copy required as sort manipulates the ages array.
let agesCopy = [];
ages.forEach(element => agesCopy.push(element));
// ascending
const _sortAge = ages.sort((a, b) => a - b);
// descending
const _sortAgeDesc = agesCopy.sort((a, b) => b - a);

console.log(_sortAge);
console.log(_sortAgeDesc);

// reduce                                                                 |--- initial value
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// get total years for companies' active state
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Combine hofs
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0);

console.log(combined);