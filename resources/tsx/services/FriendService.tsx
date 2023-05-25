import React from 'react';
import axios, {AxiosResponse} from "axios";
import {FriendType} from "../types/index";


const fetchFriends = async (): Promise<FriendType[]> => {
    try {
        const response: AxiosResponse<FriendType[]> = await axios.get('api/friends');
        return  response.data;
    } catch (error) {
        console.error("Failed to fetch friends", error);
        throw new Error("Failed to fetch friends");
    }
}

export {
    fetchFriends
};
