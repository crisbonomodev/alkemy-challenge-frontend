import { types } from "../types/types";
import { fetchWithoutToken,fetchWithToken } from "../helpers/fetch";
import Swal from 'sweetalert2';

//Accion que realiza el login del usuario con email y password
export const startLogin = (email,password) => {
    //Retorna un callback
    return async (dispatch) => {
        const response = await fetchWithoutToken('auth/signin', {email, password}, 'POST');
        const body = await response.json();
        if(body.ok)
        {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());

            dispatch(login({uid: body.id,
            name: body.name},
                ))
        }else
        {
            Swal.fire('Error',body.message);
        }

}
}


export const startRegisterWithEmailPasswordName = (email,password,firstName,lastName) => {
return async (dispatch) => {
    const response = await fetchWithoutToken('auth/signup',{email,password,firstName,lastName},'POST');
    const body = await response.json();
    if(body.ok)
        {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());

            dispatch(login({uid: body.id,
            name: body.name},
                ))
        }else
        {
            Swal.fire('Error',body.message);
        }
}
} 


export const login = (user) => {
    return{
        type: types.authLogin,
        payload: user
    }
}

export const startChecking = () => {
    return async(dispatch) => {
        const response = await fetchWithToken('auth/renew');
    const body = await response.json();
    if(body.ok)
        {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());

            dispatch(login({uid: body.id,
            name: body.name},
                ))
        }else
        {
            dispatch(checkingFinish());
        }
    }
}

const checkingFinish = () => ({type: types.authCheckingFinish});

export const startLogout = () => {

    return async (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.authLogout
})