import React, {useCallback, useEffect, useState} from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import "./_FriendList.scss";
import {FriendType, FriendListPropsType} from "../types";
import {searchFriend} from "../services";

const FriendList = ({toggleEditModal, selectedFriend, keyword, searchData, isSearchLoading, isModalOpen}: FriendListPropsType) => {

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

    return (
        <div className="friend_list_container">
            {friends.map((friend,id) => (
                <FriendCard
                    toggleEditModal={toggleEditModal}
                    selectedFriend={selectedFriend}
                    key={id}
                    friend_name={friend.friend_name}
                    memo={friend.memo}
                    friend={friend}
                />
            ))}
        </div>

    );
};

export default FriendList;
