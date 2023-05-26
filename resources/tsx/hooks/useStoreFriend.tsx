import React, {useState} from 'react';
import {storeFriend} from "../services";
import {FriendType} from "../types";

const useStoreFriend = () => {
    const [data, setData] = useState<FriendType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const createFriendData = async (formData: FriendType): Promise<void> => {
        try {
            const response: FriendType = await storeFriend(formData);
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
