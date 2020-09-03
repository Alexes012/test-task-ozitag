import React, {ChangeEvent, useState} from 'react';
import './Login.css'
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../../bll/LoginReducer';
import Input from "../../helpComponents/input/Input";
import Button from "../../helpComponents/button/Button";
import {storeType} from "../../bll/store";
import {Redirect} from "react-router-dom";


const Login:React.FC = (props: any) => {
    const [email, setEmail] = useState<string>('user@ozitag.com');
    const [password, setPass] = useState<string>('user');
    const dispatch = useDispatch();

    const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    };
    const onPassChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value)
    };
    const onSumbitHandler = () => {
        dispatch(login(email, password))
    };

    const {isAuth} = useSelector((store: storeType) => store.login);

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (
        <div className={'wrapper'}>
            <h2>Log in with your account</h2>
            <Input placeholder="Email" value={email} onChange={onEmailChange}/>
            <Input placeholder="Password" type="password" value={password} onChange={onPassChange}/>
            <Button description="Submit" onClick={onSumbitHandler}/>
        </div>
    );
};


export default Login;