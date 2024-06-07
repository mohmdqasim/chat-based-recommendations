// SignIn.js
import React, { useEffect, useState } from "react";
import { auth, googleProvider, facebookProvider} from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function SignIn() {
  const [value, setValue] = useState('');

  const handleClick = (provider) => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    }).catch((error) => {
      console.log(error.message);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      {value ? <Home /> :
        <div>
          <button onClick={() => handleClick(googleProvider)}>Sign in with Google</button>
          <button onClick={() => handleClick(facebookProvider)}>Sign in with Facebook</button>
        </div>
      }
    </div>
  );
}

export default SignIn;




