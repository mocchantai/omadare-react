import React, {useState} from 'react';
import {destroyFriend} from "../services";
import {FriendType} from "../types";

const useDestroyFriend = () => {
    const [data, setData] = useState<FriendType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const destroyFriendData = async (id: number): Promise<void> => {
        try {
            const response: FriendType = await destroyFriend(id);
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to destroy friend in hooks", error);
            setIsLoading(false);
            throw new Error("Failed to destroy friend in hooks");
    }
    };

    return {data, isLoading, destroyFriendData};
}



export default useDestroyFriend;
