import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_e7dZcsupJh3OxW8eEo-IBFgEqckngCk",
    authDomain: "clone-d5a5c.firebaseapp.com",
    databaseURL: "https://clone-d5a5c.firebaseio.com",
    projectId: "clone-d5a5c",
    storageBucket: "clone-d5a5c.appspot.com",
    messagingSenderId: "145759870679",
    appId: "1:145759870679:web:7439dc4bb1e5b52095da92",
    measurementId: "G-HF27D04DWY"
  };

// ! this initializes the App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// ! this will initialize the dataBase
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {db,auth};