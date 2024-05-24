import React from 'react';
import './css/style.css'; // Assuming your CSS file is named style.css and in the same directory
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import login from './images/signin-image.jpg'; // Assuming you have a sign-in image

const LoginForm = () => {
    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={login} alt="sign in"/></figure>
                        <a href="#" className="signup-image-link">Sign In</a>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="your_email" id="your_email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
