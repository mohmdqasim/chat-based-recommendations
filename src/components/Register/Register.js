// Register.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleProvider, facebookProvider, auth } from "../UserAuthentication/Config"; // Import Firebase auth and providers
import basestyle from "../Base.module.css";
import registerstyle from "../Register/Register.module.css";
import { signInWithPopup } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [user, setUserDetails] = useState({
    fname: "",
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
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
      errors.password = "Password must be at least 4 characters long";
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
        // Perform registration logic here (e.g., axios post request)
        // Upon successful registration, navigate to dashboard
        // Simulating a successful registration
        localStorage.setItem("email", user.email); // Save email to localStorage
        navigate("/dashboard"); // Redirect to the dashboard page
      } catch (error) {
        // Handle registration failure (e.g., display error message)
        alert(error.response.data.message);
      }
    }
  };

  const handleClick = (provider) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        localStorage.setItem("email", data.user.email);
        navigate("/dashboard"); // Navigate to the dashboard page after sign-in
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={registerstyle.register}>
      <form>
        <h1>Create your account</h1>
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={changeHandler}
          value={user.fname}
        />
        {formErrors.fname && <p className={basestyle.error}>{formErrors.fname}</p>}
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={changeHandler}
          value={user.lname}
        />
        {formErrors.lname && <p className={basestyle.error}>{formErrors.lname}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        {formErrors.email && <p className={basestyle.error}>{formErrors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        {formErrors.password && <p className={basestyle.error}>{formErrors.password}</p>}
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={changeHandler}
          value={user.cpassword}
        />
        {formErrors.cpassword && <p className={basestyle.error}>{formErrors.cpassword}</p>}
        <button type="submit" className={basestyle.button_common} onClick={signupHandler}>
          Register
        </button>
      </form>
      <p>
        Already registered? <Link to="/login" style={{ color: "green" }}>Login</Link>
      </p>
      <p style={{ marginLeft: "-37px", fontSize: "17px" }}>Or</p>
      <button
        className={basestyle.button_continue_google}
        onClick={() => handleClick(googleProvider)}
      >
        Continue With Google
      </button>
      <button
        className={basestyle.button_continue_facebook}
        onClick={() => handleClick(facebookProvider)}
      >
        Continue With Facebook
      </button>
    </div>
  );
};

export default Register;
