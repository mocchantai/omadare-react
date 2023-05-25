import React from 'react';

type FriendCardProps = {
    friend_name: string;
    memo: string;
};

const FriendCard: React.FC<FriendCardProps> = ({ friend_name, memo }) => {
    return (
        <div>
            <h3>{friend_name}</h3>
            <p>{memo}</p>
        </div>
    );
};

export default FriendCard;
