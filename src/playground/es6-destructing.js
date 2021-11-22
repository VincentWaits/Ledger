// const Person = {
//   //name: 'Vincent',
//   age: 26,
//   location: {
//     city: 'Jiangmen',
//     temp: 92,
//   },
// };

// const { name: personName = 'bob', age, location } = Person;
// console.log(personName);

// const { city, temp: temperature } = Person.location;
// console.log(`It's ${city} and ${temperature}`);

const address = ['1773 bobbyb street', 'Berkelye', 'CA', '12312'];
const [street, city, , zipCode] = address;
console.log(street, zipCode);
