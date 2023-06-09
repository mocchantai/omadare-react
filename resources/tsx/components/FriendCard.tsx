import React from 'react';
import "./_FriendCard.scss";
import {FriendType} from "../types";

type FriendCardProps = {
    toggleEditModal: () => void;
    selectedFriend: (friend: FriendType) => void;
    friend: FriendType;
    friend_name: string;
    community_name: string;
    memo: string;
};

const FriendCard: React.FC<FriendCardProps> = ({toggleEditModal, selectedFriend, friend,  friend_name,community_name, memo}) => {

    const handleCardClick = () => {
        toggleEditModal();
        selectedFriend(friend);
    }

    return (
        <a onClick={handleCardClick} className="friend_card">
            <h3 className="friend_card__name">{friend_name}</h3>
            <h3 className="friend_card__community">{community_name}</h3>
            <p className="friend_card__memo">{memo}</p>
        </a>
    );
};

export default FriendCard;
