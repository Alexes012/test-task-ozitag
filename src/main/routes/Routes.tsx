import React from 'react';
import {Switch, Route} from "react-router-dom";
import Profile from "../../components/01_Profile/Profile";
import Login from "../../components/02_Login/Login";
import Header from "../../components/header/Header";



type PageType = {
    id: number;
    title: string;
    path?: string;
    exact?: boolean;
    component: any;
};

const pages: Array<PageType> = [
    {id: 0, title: 'profile', path: '/profile', component: () => <Profile/>},
    {id: 1, title: 'login', path: '/login', component: () => <Login/>},
    {id: 2, title: 'header', path: '/', component: () => <Header/>},
];


const Routes = () => {
    return (
        <Switch>
            {pages.map(p => (
                <Route
                    key={p.id}
                    path={p.path}
                    exact={p.exact}
                    render={p.component}
                />
            ))}
        </Switch>
    )
};

export default Routes;