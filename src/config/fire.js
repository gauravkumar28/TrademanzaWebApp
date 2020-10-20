import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDDT3s0w-7KtxfQ4mS6c6o981OYALMwju8",
    authDomain: "trademanza-240006.firebaseapp.com",
    databaseURL: "https://trademanza-240006.firebaseio.com",
    projectId: "trademanza-240006",
    storageBucket: "trademanza-240006.appspot.com",
    messagingSenderId: "1097786588184",
    appId: "1:1097786588184:web:3f20ccf48835410790976d",
    measurementId: "G-FW5VE1B6P7"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;