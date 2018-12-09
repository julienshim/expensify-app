// const database = firebase.database();

// database.ref('expenses').on('child_changed', snapshot => {
//   // eslint-disable-next-line no-console
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', snapshot => {
//   // eslint-disable-next-line no-console
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   // eslint-disable-next-line no-console
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'December 2018',
//   amount: 1000,
//   createdAt: 0
// });

// database.ref('notes').remove();

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'December 2018',
//   amount: 1000,
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Leica',
//   note: 'Leica M10 + 35mm Summicron',
//   amount: 9000,
//   createdAt: 1
// });

// database.ref('expenses').push({
//   description: 'Wine',
//   note: 'Christmas Present',
//   amount: 51,
//   createdAt: 2
// });

// const firebaseNotes = {
//   notes: {
//     asdfasdf: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     asdfasdff: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [
//   {
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
//   },
//   {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
//   }
// ];

// database.ref('notes').set(notes);

// database
//   .ref()
//   .set({
//     name: 'Julien',
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Oakland',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     // eslint-disable-next-line no-console
//     console.log('This failed.', error);
//   });

// database.ref().on('value', snapshot => {
//   const value = snapshot.val();
//   const { name, job } = value;
//   // eslint-disable-next-line no-console
//   console.log(`${name} is a ${job.title} at ${job.company}`);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Andrew',
//     job: {
//       title: 'Manager',
//       company: 'Facebook'
//     }
//   });
// }, 3500);

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     // eslint-disable-next-line no-console
//     console.log(snapshot.val());
//   },
//   error => {
//     // eslint-disable-next-line no-console
//     console.log('Error with data fetchin', error);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(100);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(200);
// }, 10500);

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(error => {
//     console.log('Error fetching data.', error);
//   });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log('Data removed!');
//   })
//   .catch(error => {
//     // eslint-disable-next-line no-console
//     console.log('Deletion failed.', error);
//   });

// database.ref('age').set(null);

// database
//   .ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   })
//   .then(() => {
//     // eslint-disable-next-line no-console
//     console.log('Data updated!');
//   })
//   .catch(() => {
//     // eslint-disable-next-line no-console
//     console.log("Data didn't update");
//   });
