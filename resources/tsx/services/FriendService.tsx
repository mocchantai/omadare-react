import React from 'react';
import axios, {AxiosResponse} from "axios";
import {FriendType} from "../types/index";


const fetchFriends = async (): Promise<FriendType[]> => {
    try {
        const response: AxiosResponse<FriendType[]> = await axios.get<FriendType[]>('api/friends');
        return  response.data;
    } catch (error) {
        console.error("Failed to fetch friends", error);
        throw new Error("Failed to fetch friends");
    }
}

const storeFriend = async (formData: FriendType): Promise<FriendType> => {
    try {
        const response:AxiosResponse<FriendType> = await axios.post<FriendType>('api/friends', formData);
        return response.data;
    } catch (error) {
        console.error("Failed to store friend", error);
        throw new Error("Failed to store friend");
    }
}

export {
    fetchFriends,
    storeFriend
};
