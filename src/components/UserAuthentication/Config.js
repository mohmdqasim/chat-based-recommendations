// Config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1TrKHKjxOxbucu8cM4kpS3UaNCfMYKUU",
  authDomain: "chatgpt-based-recommendation.firebaseapp.com",
  projectId: "chatgpt-based-recommendation",
  storageBucket: "chatgpt-based-recommendation.appspot.com",
  messagingSenderId: "286889614082",
  appId: "1:286889614082:web:c7ee4c0685efcd0038801b",
  measurementId: "G-06YCFTCM6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
// const microsoftProvider = new MicrosoftAuthProvider();

// Configure GitHub OAuth Provider


export { auth, googleProvider, facebookProvider, githubProvider };
