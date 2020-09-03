import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import LoginReducer from "./LoginReducer"


const reducers = combineReducers( {
    login: LoginReducer
});

export const store = createStore (reducers, applyMiddleware(thunkMiddleware));

export type storeType = ReturnType<typeof reducers>