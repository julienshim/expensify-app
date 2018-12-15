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
  storageBucket: '<storageBucket>',
  messagingSenderId: '<messagingSenderId>'
};

firebase.initializeApp(config);

const database = firebase.database();hero

export { firebase, database as default };
```

``` .env.development / .env.test

FIREBASE_API_KEY=<apiKey>
FIREBASE_AUTH_DOMAIN=<authDomain>
FIREBASE_DATABASE_URL=<databaseURL>
FIREBASE_PROJECT_ID=<projectId>
FIREBASE_STORAGE_BUCKET=<storageBucket>
FIREBASE_MESSAGING_SENDER_ID=<messagingSenderId>

```
