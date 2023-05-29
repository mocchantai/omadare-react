import React, {useState} from 'react';
import {login} from "../services";
import {CredentialsType} from "../types";

const useLoginUser = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loginUser = async (credentials: CredentialsType): Promise<void> => {
        setIsLoading(true);

        try {
            const data = await login(credentials);
            setUser(data.user);
            localStorage.setItem('token', data.token); // Assuming the token is returned in the response
        } catch (error) {
            console.log('Error during login', error);
            throw new Error('Error during login');
        } finally {
            setIsLoading(false);
        }
    };

    return {user, isLoading, loginUser};
};

export default useLoginUser;
