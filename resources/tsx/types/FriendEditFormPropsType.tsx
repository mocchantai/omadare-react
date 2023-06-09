import React from "react";

type FriendEditFormPropsType = {
    onSubmit: (e: React.FormEvent) => Promise<void>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    friendName: string,
    onChange1: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    memo: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onDestroy: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default FriendEditFormPropsType;