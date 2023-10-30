import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import './Signup.css'; // Import the CSS file
import googleLogo from "../assets/google1.png";

const Signup = () => {
    const { createUser, loginwithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = async (event) => {
        event.preventDefault();
        const form = event.target;
        //const name = form.name.value; // New name field
        const email = form.email.value;
        const password = form.password.value;

        try {
            await createUser( email, password); // Pass the name
            alert("Sign up was successful!");
            navigate(from, { replace: true });
        } catch (error) {
            setError(error.message);
        }
    }
    //signup using google accout
    const handleRegister = () => {
        loginwithGoogle().then((result) => {
            const user = result.user;
            alert("sign up successfully")
            navigate(from, {replace: true})
        }).catch ((error) =>  {
            setError(error.message)
        });   }

    return (
        <div className="signup-container">
            <div className="signup-content">
                <h1 className="signup-title text-center">Sign Up</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSignUp}>
                   
                    <div className="form-group">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </form>
                <p className="text-center mt-3">
                    Already have an account? <Link to="/login" className="login-link">Login</Link> here.
                </p>
                <hr />
                <div className='flex w-full items-center flex-col mt-5 gap-3'>
                    <button  onClick={handleRegister} className='block'><img src={googleLogo} alt="" className='google' /> Login with Google</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;

