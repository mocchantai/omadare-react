import React from 'react';
import "./_FriendCard.scss";

type FriendCardProps = {
    handleSample: () => void;
    friend_name: string;
    memo: string;
};



const FriendCard: React.FC<FriendCardProps> = ({ handleSample, friend_name, memo }) => {
    return (
        <a onClick={handleSample} className="friend_card">
            <h3 className="friend_card__name">{friend_name}</h3>
            <p className="friend_card__memo">{memo}</p>
        </a>
    );
};

export default FriendCard;
