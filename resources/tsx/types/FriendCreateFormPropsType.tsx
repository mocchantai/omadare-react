import React from "react";

type FriendCreateFormPropsType = {
    onSubmit: (e: React.FormEvent) => Promise<void>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    friendName: string,
    onChange1: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    memo: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

export default FriendCreateFormPropsType;
