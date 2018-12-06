// const database = firebase.database();

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
