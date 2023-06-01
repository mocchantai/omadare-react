import React, {useContext, useEffect, useState} from 'react';
import {fetchFriends} from "../services";
import {FriendType} from "../types";
import {UserContext} from "../contexts/UserContext";

const useFetchFriend = () => {
    const [data, setData] = useState<FriendType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useContext(UserContext);


    const fetchData = async (): Promise<void> => {
        try {

            const loggedInUser = user?.user;
            console.log("useFetchFriendでContextを見る",loggedInUser?.id);

            const response: FriendType[] = await fetchFriends();
            const filteredData = response.filter((friend) => friend.user_id === loggedInUser?.id);
            setData(filteredData);

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
