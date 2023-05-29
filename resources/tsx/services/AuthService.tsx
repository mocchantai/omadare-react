import React from 'react';
import axios from "axios";
import {CredentialsType} from "../types";

const login = async (credentials: CredentialsType) => {
    try {
        const response = await axios.post('api/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error during login', error);
        throw new Error("Error during login")

    }
}

export {
    login,

}
