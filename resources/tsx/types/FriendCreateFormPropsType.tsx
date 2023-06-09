import React from "react";

type FriendCreateFormPropsType = {
    onSubmit: (e: React.FormEvent) => Promise<void>,
    onChangeFriendName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    friendName: string,
    onChangeCommunityName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    communityName: string,
    onChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    memo: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

export default FriendCreateFormPropsType;
