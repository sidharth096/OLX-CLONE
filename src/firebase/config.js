import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAspi58p-C0ALSCdJSPm5uzdBHAjuVgCEM",
    authDomain: "olx-clone-170e0.firebaseapp.com",
    projectId: "olx-clone-170e0",
    storageBucket: "olx-clone-170e0.appspot.com",
    messagingSenderId: "278007100058",
    appId: "1:278007100058:web:244457cc3ea2b8cae1a523",
    measurementId: "G-8X90XN2GBR"
  };

  export default firebase.initializeApp(firebaseConfig)