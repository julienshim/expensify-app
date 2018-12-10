const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Julien', age: 35 });
    // reject(new Error('Something went wrong'));
  }, 5000);
});

// eslint-disable-next-line no-console
console.log('before');

promise
  .then(data => {
    // eslint-disable-next-line no-console
    console.log('1', data);
    return 'some data';
  })
  .then(str => {
    // eslint-disable-next-line no-console
    console.log('does this run?', str);
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log('error:', error);
  });

// eslint-disable-next-line no-console
console.log('after');
