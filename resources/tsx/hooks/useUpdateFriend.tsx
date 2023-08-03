import React, {useState} from 'react';
import {fetchFriends, storeFriend, updateFriend} from "../services";
import {FriendType} from "../types";
import {useFetchFriend} from "./index";

const useUpdateFriend = () => {
    const [data, setData] = useState<FriendType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {fetchData} = useFetchFriend();

    const updateFriendData = async (id: number ,formData: FriendType): Promise<void> => {
        try {
            const response: FriendType = await updateFriend(id, formData);
            setData(response);
            await fetchData();
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to update friend", error);
            setIsLoading(false);
            throw new Error("Failed to update friend");
        }
    };

    return {data, isLoading, updateFriendData};
};

export default useUpdateFriend;
