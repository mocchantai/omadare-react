import React from 'react';
import axios from "axios";
import {CredentialsType} from "../types";

const login = async (credentials: CredentialsType) => {
    try {
        console.log("今からaxiosします")
        const response = await axios.post('api/login', credentials);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("axios失敗です。")
        console.error('Error during login in AuthService', error);
        throw new Error("Error during login")

    }
}


const logout = async () => {
    try {
        console.log("今からaxiosします");
        const response = await axios.post('api/logout');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Failed to logout in AuthService", error);
        throw new Error("Failed to logout in AuthService");
    }
}

export {
    login,
    logout

}
