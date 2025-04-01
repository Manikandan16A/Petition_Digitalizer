import { faFacebookF, faGithub, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./login.css";

function Login() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const toggleForm = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    return (
        <>
            <Navbar />
            <section className="auth-wrapper">
                <div className={`auth-container ${isSignUpActive ? "signup-active" : ""}`}>
                    {/* Login Form */}
                    <div className="auth-box login-side">
                        <div className="box-content">
                            <header>Login</header>
                            <form action="#">
                                <div className="input-holder">
                                    <input type="email" placeholder="Email" className="input" />
                                </div>
                                <div className="input-holder">
                                    <input type="password" placeholder="Password" className="password" />
                                    <i className="bx bx-hide eye-icon"></i>
                                </div>
                                <div className="form-link">
                                    <a href="#" className="forgot-pass">Forgot password?</a>
                                </div>
                                <div className="btn-holder">
                                    <button type="button">Login</button>
                                </div>
                            </form>
                            <div className="form-link">
                                <span>Don't have an account? <a href="#" className="link signup-link" onClick={toggleForm}>Signup</a></span>
                            </div>
                        </div>
                        {/* Social Media Icons */}
                        <div className="social-icons">
                            <ul>
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                                <li><FontAwesomeIcon icon={faGoogle} /></li>
                                <li><FontAwesomeIcon icon={faGithub} /></li>
                            </ul>
                        </div>
                    </div>

                    {/* Signup Form */}
                    <div className="auth-box signup-side">
                        <div className="box-content">
                            <header>Signup</header>
                            <form action="#">
                                <div className="input-holder">
                                    <input type="email" placeholder="Email" className="input" />
                                </div>
                                <div className="input-holder">
                                    <input type="password" placeholder="Create password" className="password" />
                                </div>
                                <div className="input-holder">
                                    <input type="password" placeholder="Confirm password" className="password" />
                                    <i className="bx bx-hide eye-icon"></i>
                                </div>
                                <div className="btn-holder">
                                    <button type="button">Signup</button>
                                </div>
                            </form>
                            <div className="form-link">
                                <span>Already have an account? <a href="#" className="link login-link" onClick={toggleForm}>Login</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
