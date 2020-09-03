import {authAPI} from "../api/api";
import Cookies from 'js-cookie';

const SET_USER_DATA = 'SET_USER_DATA';

type InitialStateType = typeof initialState

let initialState = {
    clientId: null,
    email: null,
    password: null,
    isAuth: false
};

export const loginReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                ...action.isAuth
            };
        default:
            return state
    }
};


export const setAuthUserData = (clientId: number | null, email: string | null, password: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {clientId, email, password, isAuth}});

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            let {clientId, email, password} = response.data;
            dispatch(setAuthUserData(clientId, email, password, true));
        });
};

export const login = (email: string, password: string) => (dispatch: any) => {
    authAPI.login(email, password)
        .then(response => {
            Cookies.set('token', response.data.accessToken);
            dispatch(getAuthUserData());
        });
};

export const logOut = () => (dispatch: any) => {
    authAPI.loginOut()
        .then(response => {
            Cookies.remove('token')
            dispatch(setAuthUserData(null, null, null, false))
        });
};

export default loginReducer;