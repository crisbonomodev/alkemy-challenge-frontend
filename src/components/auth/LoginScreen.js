import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const {loading} = useSelector(state => state.ui);
    //Hook que da acceso al dispatch de acciones
    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLogin(email,password));
    }


    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={handleLogin}>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>

                {/*
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                        disabled={loading}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                */}   
                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
        </>
    )
}
