import React from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import {FriendType} from "../types/index";

const FriendList = () => {
    const {data, isLoading}: { data: FriendType[], isLoading: boolean }  = useFetchFriend();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Friend List</h2>
            {data.map((friend) => (
                <FriendCard
                    key={friend.id}
                    friend_name={friend.friend_name}
                    memo={friend.memo}
                />
            ))}
        </div>
    );
};

export default FriendList;
