import React, {useState} from 'react';
import {storeUser} from "../services";
import {UserType} from "../types";

const useStoreFriend = () => {
    const [data, setData] = useState<UserType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const createFriendData = async (formData: UserType): Promise<void> => {
        try {
            const response: UserType = await storeUser(formData);
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to store friend", error);
            setIsLoading(false);
            throw new Error("Failed to store friend");
        }
    };

    return {data, isLoading, createFriendData};
};

export default useStoreFriend;
