import React, {useEffect, useState} from 'react';
import {createFriend} from "../services";
import {FriendType} from "../types";

const useCreateFriend = () => {
    const [data, setData] = useState<FriendType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const postData = async (): Promise<void> => {
            try {
                const response: FriendType = await createFriend();
                setData(response);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to fetch friends", error);
                setIsLoading(false)
                throw new Error("Failed to fetch friends");
            }
        }

        postData();
    }, [])

    return { data, isLoading };
};

export default useCreateFriend;
