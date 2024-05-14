import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import basestyle from "../Base.module.css";
import registerstyle from "./Register.module.css";


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
        // alert(response.data.message); // Display success message
        navigate("/login"); // Redirect to login page after successful registration
      } catch (error) {
        alert(error.response.data.message); // Display error message if registration fails
      }
    }
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
        Already registered? <Link to="/login" style={{color:'green'}}>Login</Link>
      </p>
      <p>
        Or
      </p>
      <Link to= "" className={basestyle.button_continue_google} >
          Continue With Google
        </Link>
        <Link to="" className={basestyle.button_continue_facebook} >
          Continue With Facebook
        </Link>
       

    </div>
  );
};

export default Register;
