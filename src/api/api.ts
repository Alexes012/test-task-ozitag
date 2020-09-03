import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL: 'https://tager.dev.ozitag.com/api/',
    headers: {
        Authorization: ``
    }
});

export const authAPI = {
    me() {
        return instance.get(`user/profile`, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => response.data)
    },
    login(email: string, password: string, clientId: number = 1) {
        return instance.post(`auth/user`, {clientId, email, password})
            .then((response) => response.data)
    },
    loginOut() {
        return instance.post(`user/profile/logout`, {}, {headers: {Authorization: `Bearer ${Cookies.get('token')}`}})
            .then((response) => response.data)
    }
};