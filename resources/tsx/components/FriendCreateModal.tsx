import React, {useState} from 'react';
import "./_FriendCreateModal.scss";
import useStoreFriend from "../hooks/useStoreFriend";
import {FriendType} from "../types";
import {FriendCreateModalPropsType} from "../types/index";
import {Overlay, FriendCreateForm} from "./index";

const FriendCreateModal = ({onClose}: FriendCreateModalPropsType) => {
    const [friendName, setFriendName] = useState("");
    const [memo, setMemo] = useState("");
    const { isLoading, createFriendData} = useStoreFriend();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData: FriendType = {friend_name: friendName, memo: memo, user_id: 1};//とりあえずid,use_id1にする
        console.log(formData);
        await createFriendData(formData);
        setFriendName("");
        setMemo("")
    }

    const handleOverlayClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        if (target.classList.contains('overlay')) {
            onClose();
        }
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="modal">
            <Overlay onClick={handleOverlayClick}/>
            <div className="modal_container">
                <FriendCreateForm
                    onSubmit={handleSubmit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value)}
                    value={friendName}
                    onChange1={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMemo(e.target.value)}
                    value1={memo}
                    onClick={handleClose}
                />
            </div>
        </div>
    )
}

export default FriendCreateModal;
