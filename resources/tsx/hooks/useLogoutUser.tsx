import React, {useState} from 'react';
import {logout} from "../services";

const useLogoutUser = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const logoutUser = async () => {
        try {
            const response  = await logout();
            console.log(response.data);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to logout in useLogout", error);
            setIsLoading(false);
            throw new Error("Failed to logout in useLogout");
        }
    };

    return {data, isLoading, logoutUser};
};

export default useLogoutUser;
