


// signup.js
import React, { useState } from "react";
import "./css/SignupStyle.css";
import signUp from "./images/signup-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import { googleProvider, facebookProvider, auth } from "../UserAuthentication/Config"; // Import Firebase auth and providers
import { signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});

//   const handleImageChange = (e) => {
//     setUserDetails({
//         ...user,
//         image: e.target.files[0], // Set the selected image file in state
//     });
// };

  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    image: "",
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
            const formData = new FormData();
            formData.append('email', user.email);
            formData.append('password', user.password);
            formData.append('fname', user.fname);
            formData.append('lname', user.lname);
            formData.append('image', user.image); // Append the image file to the form data

            const response = await fetch("http://127.0.0.1:5000/register", {
                method: "POST",
                body: formData, // Use formData instead of JSON.stringify(user)
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("email", user.email);
                navigate("/Login");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    } else {
        // Handle errors, if any
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
    <section className="signup">
      <div className="container_signup">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={signupHandler}
            >
              <div className="form-group">
                <label htmlFor="fname">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="First Name"
                  onChange={changeHandler}
                  value={user.fname}
                  className={formErrors.fname ? "error-input" : ""}
                />
                {formErrors.fname && (
                  <span className="error-message">{formErrors.fname}</span>
                )}
              </div>


              <div className="form-group">
                <label htmlFor="lname">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Last Name"
                  onChange={changeHandler}
                  value={user.lname}
                  className={formErrors.lname ? "error-input" : ""}
                />
                {formErrors.lname && (
                  <span className="error-message">{formErrors.lname}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={changeHandler}
                  value={user.email}
                  className={formErrors.email ? "error-input" : ""}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="pass">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={changeHandler}
                  value={user.password}
                  className={formErrors.password ? "error-input" : ""}
                />
                {formErrors.password && (
                  <span className="error-message">{formErrors.password}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="re_pass">
                  <i className="zmdi zmdi-lock-outline"></i>
                </label>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Repeat your password"
                  onChange={changeHandler}
                  value={user.cpassword}
                  className={formErrors.cpassword ? "error-input" : ""}
                />
                {formErrors.cpassword && (
                  <span className="error-message">{formErrors.cpassword}</span>
                )}
              </div>


              {/* <div className="form-group">
    <label htmlFor="image"></label>
    <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
    />
</div> */}


              <div className="submit-btn" style={{  }}>
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit-register"
                  value="Register"
                />
              </div>
            </form>
            <p style={{ textAlign:'center', fontSize: "17px", marginTop:'4px',marginBottom:'10px',fontWeight: 'bold' }}>Or</p>
            <button
                className="btn_continue_google"
                onClick={() => handleClick(googleProvider)}
            >
                <GoogleIcon style={{ }} /> Continue With Google
            </button>
            <button
                className="btn_continue_facebook"
                onClick={() => handleClick(facebookProvider)}
            >
                <FacebookIcon style={{ marginLeft: '-7px' }} /> Continue With Facebook
            </button>
          </div>
          <div className="signup-image">
            <figure>
            
              <img src={signUp} alt="sign up" />
            </figure>
            <div style={{ textAlign: "center" }}>
              <Link
                to="/Login"
                className="login-txt"
                style={{ color: "green", textDecoration: "underline",fontWeight:'bold' }}
              >
                I am already a member
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;





