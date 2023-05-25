import React from 'react';
import axios from "axios";

const fetchFriends = async () => {
    try {
        const response = await axios.get('api/friends');
        return  response.data;
    } catch (error) {
        console.error("failed to fetch friends", error);
        throw new Error("failed to fetch friends");
    }
}

export {
    fetchFriends
};
