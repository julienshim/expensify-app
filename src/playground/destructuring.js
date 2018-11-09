//
// Object Destructuring
//

// const person = {
//     name: 'Julien',
//     age: 99,
//     location: {
//         city: 'Middle of Nowhere',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (temperature && city ) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName); // Peguin, Self-Published

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', , '19147'];
// const [, city, state = 'New York' ] = address;
// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (ice)', '$3.00', '$3.50', '$3.75'];

const [itemName, , medium] = item;

// eslint-disable-next-line no-console
console.log(`A medium ${itemName} costs ${medium}`);
