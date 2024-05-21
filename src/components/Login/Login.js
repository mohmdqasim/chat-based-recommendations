import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address";
    }
    if (!values.password) {
      error.password = "Password is required";
    }
    return error;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
      try {
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        const data = await response.json();

        if (response.ok) {
          // Assuming the server sends back user details and a token
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", user.email);
          setUserState(data.user); // Assuming setUserState is used to set user context/state
          navigate("/dashboard");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (isSubmit && Object.keys(formErrors).length === 0) {
      // Logic after successful submission
    }
  }, [formErrors, isSubmit]);

  return (
    <div className={basestyle["auth-container"]}>
      <div className={loginstyle.login}>
        <form onSubmit={loginHandler}>
          <h1>Login</h1>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={changeHandler}
            value={user.email}
            style={{ borderColor: formErrors.email ? "#FF474D" : "" }}
          />
          {formErrors.email && <span className={basestyle.error}>{formErrors.email}</span>}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.password}
            style={{ borderColor: formErrors.password ? "#FF474D" : "" }}
          />
          {formErrors.password && <span className={basestyle.error}>{formErrors.password}</span>}
          <button type="submit" className={basestyle.button_common}>
            Login
          </button>
        </form>
        <p>
          Not yet registered? <NavLink to="/" style={{ color: 'green' }}>Register</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
