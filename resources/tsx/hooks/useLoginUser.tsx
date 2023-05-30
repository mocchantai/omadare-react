import React, {useState} from 'react';
import {login} from "../services";
import {CredentialsType} from "../types";

const useLoginUser = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loginUser = async (credentials: CredentialsType): Promise<void> => {

        try {
            console.log("今はhooksにいます");
            const data = await login(credentials);
            setUser(data.user);
            setIsLoading(false);

            localStorage.setItem('token', data.token); // Assuming the token is returned in the response
        } catch (error) {
            setIsLoading(false);
            console.error('Error during login in useLoginUser', error);
            throw new Error('Error during login in useLoginUser');
        }
    };

    return {user, isLoading, loginUser};
};

export default useLoginUser;
