import React from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import {FriendType} from "../types/index";
import "./_FriendList.scss";

const FriendList = () => {
    const {data, isLoading}: { data: FriendType[], isLoading: boolean }  = useFetchFriend();


    if (isLoading) {
        return (
            <div className="friend_list_loading">
                <div className="loading_spinner"></div>
            </div>
        );
    }

    return (
        <div className="friend_list_container">
            {data.map((friend,id) => (
                <FriendCard
                    key={id}
                    friend_name={friend.friend_name}
                    memo={friend.memo}
                />
            ))}
        </div>

    );
};

export default FriendList;
