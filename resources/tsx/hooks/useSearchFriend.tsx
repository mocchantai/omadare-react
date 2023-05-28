import React, {useEffect, useState} from 'react';
import {searchFriend} from "../services";
import {FriendType} from "../types";

const useSearchFriend = (keyword: string) => {
    const [data, setData] = useState<FriendType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const searchData = async () => {
            try {
                const response = await searchFriend(keyword);
                setData(response);
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
