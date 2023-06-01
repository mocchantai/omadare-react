import React from 'react';
import axios, {AxiosResponse} from "axios";
import {FriendType} from "../types/index";


const fetchFriends = async (): Promise<FriendType[]> => {
    try {
        const response: AxiosResponse<FriendType[]> = await axios.get<FriendType[]>('api/friends', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        console.log("初回だけ？", response.data);
        return  response.data;
    } catch (error) {
        console.error("Failed to fetch friends", error);
        throw new Error("Failed to fetch friends");
    }
}

const storeFriend = async (formData: FriendType): Promise<FriendType> => {
    try {
        const response:AxiosResponse<FriendType> = await axios.post<FriendType>('api/friends', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to store friend", error);
        throw new Error("Failed to store friend");
    }
}

const searchFriend = async (keyword: string): Promise<FriendType[]> => {
    try {
        const response: AxiosResponse<FriendType[]> = await axios.post<FriendType[]>('api/friends/search', {
            keyword: keyword,
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Failed to search friends", error);
        throw new Error("Failed to search friends");
        // console.log("検索結果0です")

    }
}

export {
    fetchFriends,
    storeFriend,
    searchFriend
};
