import React from 'react';
import axios from "axios";
import {CredentialsType} from "../types";

const login = async (credentials: CredentialsType) => {
    try {
        const response = await axios.post('api/login', credentials);
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
        console.error('Error during login in AuthService', error);
        throw new Error("Error during login")

    }
}


const logout = async () => {
    try {
        const response = await axios.post('api/logout');
        localStorage.removeItem("token");
        return response.data;
    } catch (error) {
        console.error("Failed to logout in AuthService", error);
        throw new Error("Failed to logout in AuthService");
    }
}

export {
    login,
    logout

}
