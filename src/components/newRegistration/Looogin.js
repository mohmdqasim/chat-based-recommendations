// import React from 'react';
// import './css/login.css'; // Assuming your CSS file is named login.css and in the same directory
// import './fonts/material-icon/css/material-design-iconic-font.min.css';
// import login from './images/signin-image.jpg'; // Assuming you have a sign-in image

// const LoginForm = () => {
//     return (
//         <section className="sign-in">
//             <div className="container-signIn">
//                 <div className="signin-content">
//                     <div className="signin-image">
//                         <figure><img src={login} alt="sign in"/></figure>
//                         <a href="/" className="signup-image-link">Create an Account</a>
//                     </div>
//                     <div className="signin-form">
//                         <h2 className="form-title">Sign In</h2>
//                         <form method="POST" className="register-form" id="login-form">
//                             <div className="form-group">
//                                 <label htmlFor="your_email"><i className="zmdi zmdi-email"></i></label>
//                                 <input type="email" name="your_email" id="your_email" placeholder="Your Email"/>
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
//                                 <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
//                             </div>
//                             <div className="form-group">
//                                 <input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
//                                 <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
//                             </div>
//                             <div className="form-group form-button">
//                                 <input type="submit" name="signin" id="signin" className="form-submit" value="Log in"/>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LoginForm;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/login.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import login from './images/signin-image.jpg';

const LoginForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!user.email) {
            errors.email = 'Email is required';
        } else if (!emailRegex.test(user.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!user.password) {
            errors.password = 'Password is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('http://127.0.0.1:5000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                const data = await response.json();
                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    navigate("/Dashboard");

                    // Redirect or do something else after successful login
                } else {
                    console.error('Login failed:', data.message);
                    // Display error message to user
                }
            } catch (error) {
                console.error('Error during login:', error.message);
                // Handle network errors or other exceptions
            }
        }
    };

    return (
        <section className="sign-in">
            <div className="container-signIn">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={login} alt="sign in"/></figure>
                        <a href="/" className="signup-image-link">Create an Account</a>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="your_email" placeholder="Your Email" onChange={handleChange} value={user.email} />
                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" onChange={handleChange} value={user.password} />
                                {formErrors.password && <span className="error">{formErrors.password}</span>}
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

