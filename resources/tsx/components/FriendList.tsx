import React, {useCallback, useEffect, useState} from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import "./_FriendList.scss";
import {FriendType, FriendListPropsType} from "../types";
import {searchFriend} from "../services";

const FriendList = ({keyword, searchData, isSearchLoading, isModalOpen}: FriendListPropsType) => {

    const {data: fetchedData, isLoading: isFetchLoading}: { data: FriendType[], isLoading: boolean }  = useFetchFriend();

    // const friends = keyword ? searchData : fetchedData;
    const isLoading = keyword ? isSearchLoading : isFetchLoading;

    const [friends, setFriends] = useState<FriendType[]>([]);

    useEffect(() => {
        setFriends(keyword ? searchData : fetchedData);
    }, [isLoading]);

    if (isLoading) {
        return (
            <div className="friend_list_loading">
                <div className="loading_spinner"></div>
            </div>
        );
    }

    // console.log("fetchedDataを表示します。", fetchedData);
    // console.log("friendsを表示します。", friends);

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
