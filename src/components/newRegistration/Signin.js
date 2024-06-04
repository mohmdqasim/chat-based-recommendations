


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './css/login.css';
// import './fonts/material-icon/css/material-design-iconic-font.min.css';
// import login from './images/signin-image.jpg';
// import { googleProvider, facebookProvider, auth } from "../UserAuthentication/Config"; // Import Firebase auth and providers
// import { signInWithPopup } from "firebase/auth";
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';

// const LoginForm = () => {
//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         email: '',
//         password: ''
//     });
//     const [formErrors, setFormErrors] = useState({});
//     const [serverError, setServerError] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUser({
//             ...user,
//             [name]: value
//         });
//     };

//     const validateForm = () => {
//         const errors = {};
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         if (!user.email) {
//             errors.email = 'Email is required';
//         } else if (!emailRegex.test(user.email)) {
//             errors.email = 'Please enter a valid email address';
//         }
//         if (!user.password) {
//             errors.password = 'Password is required';
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/login', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(user)
//                 });
//                 const data = await response.json();
//                 if (response.ok) {
//                     localStorage.setItem('token', data.token);
//                     localStorage.setItem('user', JSON.stringify(data.user));
//                     navigate("/Dashboard");

//                     // Redirect or do something else after successful login
//                 } else {
//                     console.error('Login failed:', data.message);
//                     console.error('Error during login:', data.message);
//                     // Display error message to user
//                 }
//             } catch (error) {
//                 console.error('Error during login:', error.message);
//                 setServerError('Error during login, please try again later.');
//                 // Handle network errors or other exceptions
//             }
//         }
//     };

//     const handleClick = (provider) => {
//         signInWithPopup(auth, provider)
//             .then((data) => {
//                 localStorage.setItem("email", data.user.email);
//                 navigate("/dashboard"); // Navigate to the dashboard page after sign-in
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             });
//     };

//     return (
//         <section className="sign-in">
//             <div className="container-signIn">
//                 <div className="signin-content">
//                     <div className="signin-image">
//                         <figure><img src={login} alt="sign in"/></figure>
//                         <a href="/" className="signup-image-link" style={{textDecoration: 'underline'}}>Create an Account</a>
//                     </div>
//                     <div className="signin-form">
//                         <h2 className="form-title">Sign In</h2>
//                         <form onSubmit={handleSubmit} className="register-form" id="login-form">
//                             <div className="form-group">
//                                 <label htmlFor="your_email"><i className="zmdi zmdi-email"></i></label>
//                                 <input type="email" name="email" id="your_email" placeholder="Your Email" onChange={handleChange} value={user.email} />
//                                 {formErrors.email && <span className="error" style={{ color: 'red', marginLeft:'10px' }}>{formErrors.email}</span>}
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
//                                 <input type="password" name="password" id="your_pass" placeholder="Password" onChange={handleChange} value={user.password} />
//                                 {formErrors.password && <span className="error" style={{ color: 'red' }}>{formErrors.password}</span>}
//                             </div>
//                             <div className="submit-btn" style={{paddingRight:'8px'}}>
//                                 <input type="submit" name="signin" id="signin-btn" className="form-submit" value="Log in"/>
//                             </div>
//                         </form>
//                         <p style={{ textAlign:'center', fontSize: "17px", marginTop:'4px',marginBottom:'10px',fontWeight: 'bold' }}>Or</p>
//                         <button
//                             className="button_continue_google"
//                             onClick={() => handleClick(googleProvider)}
//                         >
//                             <GoogleIcon style={{ marginLeft: '-20px' }} /> Continue With Google
//                         </button>
//                         <button
//                             className="button_continue_facebook"
//                             onClick={() => handleClick(facebookProvider)}
//                         >
//                             <FacebookIcon style={{ marginLeft: '-15px' }} /> Continue With Facebook
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default LoginForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/SigninStyle.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import login from './images/signin-image.jpg';
import { googleProvider, facebookProvider, auth } from "../UserAuthentication/Config"; // Import Firebase auth and providers
import { signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const LoginForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [serverError, setServerError] = useState('');

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
                    console.log("X_LOCALSTORAGE DATA_x",localStorage.getItem('user'));
                    navigate("/Dashboard");

                    // Redirect or do something else after successful login
                } else {
                    console.error('Login failed:', data.message);
                    setServerError(data.message);
                    // Display error message to user
                }
            } catch (error) {
                console.error('Error during login:', error.message);
                setServerError('Error during login, please try again later.');
                // Handle network errors or other exceptions
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
        <section className="sign-in">
            <div className="container-signIn">
                <div className="signin-content">
                    <div style={{ textAlign: "center" }}>
                        <figure><img src={login} alt="sign in"/></figure>
                        <a href="/" className="signup-image-link" style={{textDecoration: 'underline',textAlign:'center',color:'green',fontWeight:'bold'}}>Create an Account</a>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="your_email" placeholder="Your Email" onChange={handleChange} value={user.email} />
                                {formErrors.email && <span className="error" style={{ color: 'red', marginLeft:'10px' }}>{formErrors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" onChange={handleChange} value={user.password} />
                                {formErrors.password && <span className="error" style={{ color: 'red' }}>{formErrors.password}</span>}
                            </div>
                            {serverError && <span className="error" style={{ color: 'red' }}>{serverError}</span>}
                            <div className="submit-btn" style={{paddingRight:'8px'}}>
                                <input type="submit" name="signin" id="signin-btn" className="form-submit-login" value="Log in"/>
                            </div>
                        </form>
                        <p style={{ textAlign:'center', fontSize: "17px", marginTop:'4px',marginBottom:'10px',fontWeight: 'bold' }}>Or</p>
                        <button
                            className="button_continue_google"
                            onClick={() => handleClick(googleProvider)}
                        >
                            <GoogleIcon style={{ marginLeft: '-20px' }} /> Continue With Google
                        </button>
                        <button
                            className="button_continue_facebook"
                            onClick={() => handleClick(facebookProvider)}
                        >
                            <FacebookIcon style={{ marginLeft: '-15px' }} /> Continue With Facebook
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
