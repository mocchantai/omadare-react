import React from "react";

type FriendCreateFormProps = {
    onSubmit: (e: React.FormEvent) => Promise<void>,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    onChange1: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    value1: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
};

export default FriendCreateFormProps;
