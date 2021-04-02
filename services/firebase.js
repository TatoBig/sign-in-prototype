import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYOmqAcde6tTWEk2_PDXkCSNoV--r1Y5k",
    authDomain: "pruebaemulador2.firebaseapp.com",
    projectId: "pruebaemulador2",
    storageBucket: "pruebaemulador2.appspot.com",
    messagingSenderId: "1015441125239",
    appId: "1:1015441125239:web:faff85cc20e24f15d23b72",
    measurementId: "G-0NM8PT22NW"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    
    if (process.env.NODE_ENV === 'development') {
      firebase.firestore().useEmulator('localhost', 8080)
      firebase.auth().useEmulator('http://localhost:9099/', { disableWarnings: true })
    }
} else {
    firebase.app()
}
  
  
const db = firebase.firestore();
const auth = firebase.auth();

export default firebase;
export { db, auth };