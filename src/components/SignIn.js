// SignIn.js

import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  // Your Firebase config object
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {
  const signInWithProvider = async (providerName) => {
    let provider;

    switch (providerName) {
      case 'google':
        provider = new firebase.auth.GoogleAuthProvider();
        break;
      case 'facebook':
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'github':
        provider = new firebase.auth.GithubAuthProvider(); // Corrected provider name
        break;
      case 'microsoft':
        provider = new firebase.auth.OAuthProvider('microsoft.com');
        break;
      default:
        throw new Error('Unsupported provider');
    }

    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={() => signInWithProvider('google')}>Sign in with Google</button>
      <button onClick={() => signInWithProvider('facebook')}>Sign in with Facebook</button>
      <button onClick={() => signInWithProvider('github')}>Sign in with GitHub</button>
      <button onClick={() => signInWithProvider('microsoft')}>Sign in with Microsoft</button>
    </div>
  );
};

export default SignIn;
