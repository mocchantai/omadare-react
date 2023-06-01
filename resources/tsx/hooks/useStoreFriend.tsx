import React, {useState} from 'react';
import {fetchFriends, storeFriend} from "../services";
import {FriendType} from "../types";
import {useFetchFriend} from "./index";

const useStoreFriend = () => {
    const [data, setData] = useState<FriendType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {fetchData} = useFetchFriend();

    const storeFriendData = async (formData: FriendType): Promise<void> => {
        try {
            const response: FriendType = await storeFriend(formData);
            setData(response);
            await fetchData();
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to store friend", error);
            setIsLoading(false);
            throw new Error("Failed to store friend");
        }
    };

    return {data, isLoading, storeFriendData};
};

export default useStoreFriend;
