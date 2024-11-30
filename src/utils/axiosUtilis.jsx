import axios from "axios";
import { Navigate } from "react-router-dom";

const client = axios.create({baseURL : "https://notes.devlop.tech/api"})
export const request = ({...paramtres})=>{
    client.defaults.headers.common.Authorization = `Bearer ${window.localStorage.getItem('authToken')}`
    const success = reponse => reponse 
    const onErr = err =>{
        if (err.status == 401) {
            Navigate('/');
        }else {
            return err
        }
        return `this      ${err} `

    } 
    return client(paramtres).then(success).catch(onErr)
}