import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "virtual-ui-f0d5b.firebaseapp.com",
  projectId: "virtual-ui-f0d5b",
  storageBucket: "virtual-ui-f0d5b.firebasestorage.app",
  messagingSenderId: "50699917269",
  appId: "1:50699917269:web:0183225d2b2a7a34a58f5c",
  measurementId: "G-DFDLJXP3HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}