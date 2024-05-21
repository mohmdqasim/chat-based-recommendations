import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../UserAuthentication/Config";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname) {
      errors.fname = "First Name is required";
    }
    if (!values.lname) {
      errors.lname = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password length is too short";
    }
    if (!values.cpassword) {
      errors.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      errors.cpassword = "Passwords do not match";
    }

    return errors;
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://127.0.0.1:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("email", user.email);
          navigate("/dashboard");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (errors.cpassword) {
        setUserDetails((prevState) => ({
          ...prevState,
          cpassword: ""
        }));
      }
    }
  };

  const handleClick = (provider) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem("email", data.user.email);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={basestyle["auth-container"]}>
      <div className={registerstyle.register}>
        <form onSubmit={signupHandler}>
          <h1>Create your account</h1>
          <div className={registerstyle.inputContainer}>
            <input
              type="text"
              name="fname"
              placeholder={formErrors.fname || "First Name"}
              onChange={changeHandler}
              value={user.fname}
              className={formErrors.fname ? registerstyle.errorInput : ""}
            />
          </div>
          
          <div className={registerstyle.inputContainer}>
            <input
              type="text"
              name="mname"
              placeholder="Middle Name"
              onChange={changeHandler}
              value={user.mname}
            />
          </div>

          <div className={registerstyle.inputContainer}>
            <input
              type="text"
              name="lname"
              placeholder={formErrors.lname || "Last Name"}
              onChange={changeHandler}
              value={user.lname}
              className={formErrors.lname ? registerstyle.errorInput : ""}
            />
          </div>

          <div className={registerstyle.inputContainer}>
            <input
              type="email"
              name="email"
              placeholder={formErrors.email || "Email"}
              onChange={changeHandler}
              value={user.email}
              className={formErrors.email ? registerstyle.errorInput : ""}
            />
          </div>

          <div className={registerstyle.inputContainer}>
            <input
              type="password"
              name="password"
              placeholder={formErrors.password || "Password"}
              onChange={changeHandler}
              value={user.password}
              className={formErrors.password ? registerstyle.errorInput : ""}
            />
          </div>

          <div className={registerstyle.inputContainer}>
            <input
              type="password"
              name="cpassword"
              placeholder={formErrors.cpassword || "Confirm Password"}
              onChange={changeHandler}
              value={user.cpassword}
              className={formErrors.cpassword ? registerstyle.errorInput : ""}
            />
          </div>
          
          <button type="submit" className={basestyle.button_common}>
            Register
          </button>
        </form>
        <p>
          Already registered? <Link to="/login" style={{ color: "green" }}>Login</Link>
        </p>
        <p style={{ alignContent: 'center', fontSize: "17px" }}>Or</p>

        <button
          className={basestyle.button_continue_google}
          onClick={() => handleClick(googleProvider)}
        >
          <GoogleIcon />
          Continue With Google
        </button>

        <button
          className={basestyle.button_continue_facebook}
          onClick={() => handleClick(facebookProvider)}
        >
          <FacebookIcon />
          Continue With Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
