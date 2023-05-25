import React from 'react';
import "./_FriendCard.scss";

type FriendCardProps = {
    friend_name: string;
    memo: string;
};

const FriendCard: React.FC<FriendCardProps> = ({ friend_name, memo }) => {
    return (
        <div className="friend_card">
            <h3 className="friend_card__name">{friend_name}</h3>
            <p className="friend_card__memo">{memo}</p>
        </div>
    );
};

export default FriendCard;
