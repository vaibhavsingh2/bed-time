import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyATrLtbxzSSyKsZUxXXfhDVCbMDk6O7gMg",
    authDomain: "student-attendance-b48e3.firebaseapp.com",
    databaseURL: "https://student-attendance-b48e3.firebaseio.com",
    projectId: "student-attendance-b48e3",
    storageBucket: "student-attendance-b48e3.appspot.com",
    messagingSenderId: "29035825556",
    appId: "1:29035825556:web:63b647c15422d4e02a6781"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();