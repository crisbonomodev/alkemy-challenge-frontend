//Acciones relacionadas con el User Interface.
import { types } from "../types/types";

//Action para setear el error en el form.
export const setError = (err) => ({
    type: types.uiSetError,
    payload: err
});

//Action para quitar el error en el form.
export const RemoveError = () => ({
    type: types.uiRemoveError,
});

//Accion para iniciar el loading y bloquear el boton.
export const startLoading = () => ({
type: types.uiStartLoading,
});

//Accion para finalizar el loading y desbloquear el boton.
export const finishLoading = () => ({
    type: types.uiFinishLoading,
    });

//Accion para abrir/cerrar el modal

export const uiOpenModal = () => ({
    type: types.uiOpenModal
})

export const uiCloseModal = () => ({
    type: types.uiCloseModal
})