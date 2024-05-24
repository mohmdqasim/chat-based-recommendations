import React from 'react';
import './css/style.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import signUp from './images/signup-image.jpg';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re_pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term"/>
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree to all statements in <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signUp} alt="sign up"/></figure>
                        <Link to="/newLogin">I am already a member</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;
