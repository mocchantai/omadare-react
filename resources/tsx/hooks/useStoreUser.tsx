import React, {useState} from 'react';
import {storeUser} from "../services";
import {UserType} from "../types";

const useStoreUser = () => {
    const [data, setData] = useState<UserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const storeUserData = async (formData: UserType): Promise<void> => {
        try {
            console.log("storeのhooksのtryにいます。これからaxiosをしますよね？")
            const response: UserType = await storeUser(formData);
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.log("storeのhooksのcatchにいます。")
            console.error("Failed to store user in useStoreUser", error);
            setIsLoading(false);
            throw new Error("Failed to store user in useStoreUser");
        }
    };

    return {data, isLoading, storeUserData};
};

export default useStoreUser;
