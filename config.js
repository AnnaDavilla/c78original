import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  const firebaseConfig = {
    apiKey: "AIzaSyBJyOrulFmJQnriciZthqvBBYXiI9GEiV8",
    authDomain: "bibliotecaeletronica2-fde26.firebaseapp.com",
    projectId: "bibliotecaeletronica2-fde26",
    storageBucket: "bibliotecaeletronica2-fde26.appspot.com",
    messagingSenderId: "324043367280",
    appId: "1:324043367280:web:1bc3aefc284b8009fae5b5"
  };
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
