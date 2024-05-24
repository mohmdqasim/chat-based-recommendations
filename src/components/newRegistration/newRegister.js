import React, { useState } from 'react';
import './css/style.css';
import signUp from './images/signup-image.jpg';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [user, setUserDetails] = useState({
        fname: "",
        mname: "", // Middle name removed from initial state
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
                    navigate("/Looogin");
                    // Navigate to success page or do something else
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

    return (
        <section className="signup">
            <div className="container_signup">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form" onSubmit={signupHandler}>
                            <div className="form-group">
                                <label htmlFor="fname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="fname" id="fname" placeholder={formErrors.fname || "First Name"} onChange={changeHandler} value={user.fname} className={formErrors.fname ? "error-input" : ""} />
                                {formErrors.fname && <span className="error-message">{formErrors.fname}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="mname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="mname" id="mname" placeholder="Middle Name" onChange={changeHandler} value={user.mname} />
                                {/* No error handling for middle name */}
                            </div>

                            <div className="form-group">
                                <label htmlFor="lname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lname" id="lname" placeholder={formErrors.lname || "Last Name"} onChange={changeHandler} value={user.lname} className={formErrors.lname ? "error-input" : ""} />
                                {formErrors.lname && <span className="error-message">{formErrors.lname}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder={formErrors.email || "Your Email"} onChange={changeHandler} value={user.email} className={formErrors.email ? "error-input" : ""} />
                                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="password" placeholder={formErrors.password || "Password"} onChange={changeHandler} value={user.password} className={formErrors.password ? "error-input" : ""} />
                                {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="re_pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="cpassword" placeholder={formErrors.cpassword || "Repeat your password"} onChange={changeHandler} value={user.cpassword} className={formErrors.cpassword ? "error-input" : ""} />
                                {formErrors.cpassword && <span className="error-message">{formErrors.cpassword}</span>}
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signUp} alt="sign up" /></figure>
                        <Link to="/Looogin" style={{ color: 'black' }}>I am already a member</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
