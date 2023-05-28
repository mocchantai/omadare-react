import React, {useCallback, useEffect} from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import "./_FriendList.scss";
import {FriendType, FriendListPropsType} from "../types";

const FriendList = ({keyword, searchData, isSearchLoading}: FriendListPropsType) => {
    const {data: fetchedData, isLoading: isFetchLoading}: { data: FriendType[], isLoading: boolean }  = useFetchFriend();


    const friends = keyword ? searchData : fetchedData;
    const isLoading = keyword ? isSearchLoading : isFetchLoading;


    if (isLoading) {
        return (
            <div className="friend_list_loading">
                <div className="loading_spinner"></div>
            </div>
        );
    }

    console.log("Listを表示します。");
    console.log(friends);

    return (
        <div className="friend_list_container">
            {friends.map((friend,id) => (
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
