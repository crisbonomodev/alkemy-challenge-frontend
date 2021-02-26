import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import validator from 'validator';
import { RemoveError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

        //Hook que da acceso al dispatch de acciones
        const dispatch = useDispatch();
        //Obtenemos una parte del state con useSelector, el cual nos traera una copia del state
        const {msgError} = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        password2:''
    });

    const {firstName,lastName,email,password,password2} = formValues;
 
    //Validacion
 const isFormValid = () => {
        
    if (firstName.trim().length === 0)
    {
        dispatch(setError('Invalid name'));
        return false;
    }else if (lastName.trim().length === 0)
    {
        dispatch(setError('Invalid name'));
        return false;
    } else if (!validator.isEmail(email)) 
    {
        dispatch(setError('Email no valido'));
        return false;
    }
    else if (password !== password2 || password.trim().length < 5) 
    {
        dispatch(setError('Password no valido'));
        return false;
    }
    dispatch(RemoveError());
    return true;
}
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            
            dispatch(startRegisterWithEmailPasswordName(email,password,firstName,lastName));
        }
    }

   

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleSubmit}>

                
                {//Si el mensaje de error es distinto de null, lo muestra
                    msgError &&
                    <div className="auth__alert-error">
                    {msgError}
                    </div>
                }

                <input 
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

<input 
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

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

                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
