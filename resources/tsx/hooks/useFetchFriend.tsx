import React, {useEffect, useState} from 'react';
import {fetchFriends} from "../services";
import {FriendType} from "../types";

const useFetchFriend = () => {
    const [data, setData] = useState<FriendType[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    const fetchData = async (): Promise<void> => {
        try {
            const response: FriendType[] = await fetchFriends();
            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.error("Failed to fetch friends", error);
            setIsLoading(false)
            throw new Error("Failed to fetch friends");
        }
    }


    useEffect(() => {
        fetchData();
    }, [])


    return { data, isLoading };
};



export default useFetchFriend;
