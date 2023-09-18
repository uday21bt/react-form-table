import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgtq6OElxg3X_seHhlMjrwReE6f9XUhb0",
    authDomain: "feedbackform-386a9.firebaseapp.com",
    projectId: "feedbackform-386a9",
    storageBucket: "feedbackform-386a9.appspot.com",
    messagingSenderId: "14381605162",
    appId: "1:14381605162:web:778b60c21c14e74d4c7e53"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export {
    auth,
    provider,
    db,
};
