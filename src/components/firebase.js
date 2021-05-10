import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAhMqanqYjKk_cHk11TdjljWys1TqnT4Rs",
    authDomain: "linkedin-761d1.firebaseapp.com",
    projectId: "linkedin-761d1",
    storageBucket: "linkedin-761d1.appspot.com",
    messagingSenderId: "95916135890",
    appId: "1:95916135890:web:54a8c3fa15b854ac9da40b"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}