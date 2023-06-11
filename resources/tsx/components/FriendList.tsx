import React, {useCallback, useEffect, useState} from 'react';
import {FriendCard} from './index';
import {useFetchFriend} from "../hooks/index";
import "./_FriendList.scss";
import {FriendType, FriendListPropsType} from "../types";
import {searchFriend} from "../services";

const FriendList = ({toggleEditModal, selectedFriend, keyword, searchData, isSearchLoading, isModalOpen, refetchedFriends}: FriendListPropsType) => {

    const {data: fetchedData, isLoading: isFetchLoading}: { data: FriendType[], isLoading: boolean }  = useFetchFriend();
    // const friends = keyword ? searchData : fetchedData;
    const [friends, setFriends] = useState<FriendType[]>(keyword ? searchData : fetchedData);
    const isLoading = keyword ? isSearchLoading : isFetchLoading;

    useEffect(() => {
        if (refetchedFriends) {
            // refetchFriendDataが存在する場合はデータの再取得がトリガーされたことを意味する
            setFriends(keyword ? searchData : fetchedData);
        }
    }, [keyword, searchData, fetchedData, refetchedFriends]);

    useEffect(() => {
        if (!refetchedFriends) {
            // 初回レンダリング時の処理
            setFriends(keyword ? searchData : fetchedData);
            console.log("keywordがなくなったよ");
        }
    }, []);

    useEffect(() => {
        if (refetchedFriends) {
            // refetchFriendDataの後の処理
            setFriends(keyword ? searchData : refetchedFriends);
        }
    }, [keyword, searchData, refetchedFriends ]);

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
                    community_name={friend.community_name}
                    memo={friend.memo}
                    friend={friend}
                />
            ))}
        </div>

    );
};

export default FriendList;
