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

const updateFriend = async (id: number, formData: FriendType): Promise<FriendType> => {
    try {
        const response:AxiosResponse<FriendType> = await axios.patch<FriendType>(`api/friends/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to update friend", error);
        throw new Error("Failed to update friend");
    }
}

const destroyFriend = async (id: number): Promise<FriendType> => {
    try {
        const response:AxiosResponse<FriendType> = await axios.delete<FriendType>(`api/friends/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Failed to delete friend", error);
        throw new Error("Failed to delete friend");
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
        return response.data;
    } catch (error) {
        console.error("Failed to search friends", error);
        throw new Error("Failed to search friends");

    }
}

export {
    fetchFriends,
    storeFriend,
    updateFriend,
    searchFriend,
    destroyFriend
};
