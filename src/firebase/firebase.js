import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLwphwXdab7SxMO2NhjwzX40D6pLaGY18",
    authDomain: "linkedin-clone-ad6ac.firebaseapp.com",
    projectId: "linkedin-clone-ad6ac",
    storageBucket: "linkedin-clone-ad6ac.appspot.com",
    messagingSenderId: "91306547056",
    appId: "1:91306547056:web:6f591559f9bb9ac1dfa1b5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };