import React from 'react';
import axios from "axios";
import {CredentialsType} from "../types";

const login = async (credentials: CredentialsType) => {
    try {
        console.log("今からaxiosします")
        const response = await axios.post('api/login', credentials);
        return response.data;
    } catch (error) {
        console.log("axios失敗です。")
        console.error('Error during login in AuthService', error);
        throw new Error("Error during login")

    }
}

export {
    login,

}
