# Expensify App

Expensify is a budgeting app built with React, Redux, SCSS, Webpack, and Babel 7.

### Requirements

- Node 10.14.1 LTS due to Firebase dependency.

### Firebase

Add a firebase/firebase.js file in the src folder with your own firebase configuration object:

```firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: '<apiKey>',
  authDomain: '<authDomain>',
  databaseURL: '<databaseURL>',
  projectId: '<projectId>',
  storageBucket: '<storageBucket>,
  messagingSenderId: '<messagingSenderId>'
};

firebase.initializeApp(config);
```
