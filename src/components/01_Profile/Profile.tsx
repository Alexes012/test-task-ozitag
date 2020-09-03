import React, {FC} from 'react'
import styles from './Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../../bll/store";
import {Redirect} from "react-router-dom";
import {logOut} from "../../bll/LoginReducer";
import Button from "../../helpComponents/button/Button";

const Profile: React.FC = () => {

    const dispatch = useDispatch();

    const onSumbitHandler4 = () => {
        dispatch(logOut())
    };

    const {isAuth} = useSelector((store: storeType) => store.login);

        if (isAuth === false) {
            return <Redirect to={'/'}/>
        }

    return (
        <div className={styles.profile}>
             <h1>It's your profile</h1>
            <h2>If you want to leave your page, click the button below</h2>
            <Button description="LogOut" onClick={onSumbitHandler4}/>
        </div>

    )
};

export default Profile;