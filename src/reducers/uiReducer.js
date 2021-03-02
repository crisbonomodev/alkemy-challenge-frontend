import { types } from "../types/types";

const initialState = {
    loading: false,
    msgError: null,
    openModal: false,
};

export const uiReducer = (state = initialState,action) => {

    switch (action.type) {

        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            };
            case types.uiRemoveError:
            return {
                ...state,
                msgError: null
            };
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
             };
             case types.uiFinishLoading:
                return {
                    ...state,
                    loading: false,
                 }
            case types.uiOpenModal:
                return {
                    ...state,
                    openModal: true
                }
            case types.uiCloseModal:
                return {
                    ...state,
                    openModal: false
                }
        default:
            return state;
    }


}