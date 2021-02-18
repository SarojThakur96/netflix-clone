import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBkF8xTMx1i2m5xNBssNxNnzFAi5W4BReo",
    authDomain: "netflix-clone-182c3.firebaseapp.com",
    projectId: "netflix-clone-182c3",
    storageBucket: "netflix-clone-182c3.appspot.com",
    messagingSenderId: "527173652120",
    appId: "1:527173652120:web:f9651f57dee68630bc8aed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;