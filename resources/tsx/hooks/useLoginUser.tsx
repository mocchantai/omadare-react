import React, {useContext, useState} from 'react';
import {login} from "../services";
import {CredentialsType} from "../types";
import {UserContext} from "../contexts/UserContext";

const useLoginUser = () => {

    const user = useContext(UserContext);

    // const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const loginUser = async (credentials: CredentialsType): Promise<void> => {

        try {
            const data = await login(credentials);
            user?.setUser(data.user);//UserContextのuserをdata.userに変更する
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
