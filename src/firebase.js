import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLDaFxtInNjruKOZXsC8juo5J_i8S0FEY",
  authDomain: "tinder-clone-2b0ce.firebaseapp.com",
  projectId: "tinder-clone-2b0ce",
  storageBucket: "tinder-clone-2b0ce.appspot.com",
  messagingSenderId: "394129597360",
  appId: "1:394129597360:web:d79454e05c06fdcc31ac75",
  measurementId: "G-MCG9HQNF8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
