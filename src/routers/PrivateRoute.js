import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

//COmponente para proteger rutas privadas

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest} //The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array
        component={(props)=> (
            (isAuthenticated) //Si el usuario esta autenticado, devuelvo el componente en la ruta, sino un redirect a login
            ? <Component {...props}/>
            : <Redirect to="/auth/login" />
        )}
        />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}