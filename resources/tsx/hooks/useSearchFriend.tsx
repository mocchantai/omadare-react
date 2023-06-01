import React, {useContext, useEffect, useState} from 'react';
import {searchFriend} from "../services";
import {FriendType} from "../types";
import {UserContext} from "../contexts/UserContext";

const useSearchFriend = (keyword: string) => {
    const [data, setData] = useState<FriendType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useContext(UserContext);


    useEffect(() => {
        const searchData = async () => {
            try {
                const response = await searchFriend(keyword);
                const filteredData = response.filter((friend) => friend.user_id === user?.user?.id);
                setData(filteredData);
                setIsLoading(false);
            } catch (error) {
                console.error("Failed to search friends", error);
                setIsLoading(false);
                throw new Error("Failed to search friends");
            }
        }
        searchData();
    }, [keyword])

    return {data, isLoading};
};

export default useSearchFriend;
