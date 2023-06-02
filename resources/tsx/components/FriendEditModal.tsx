import React, {useContext, useState} from 'react';
import "./_FriendCreateModal.scss";
import {useStoreFriend} from "../hooks";
import {FriendType} from "../types";
import {Overlay, FriendCreateForm, FriendEditForm, EditOverlay} from "./index";
import {UserContext} from "../contexts/UserContext";
import {fetchFriends, updateFriend} from "../services";

type FriendEditModalPropsType = {
    selectedFriendId: number;
    toggleEditModal: () => void;
    selectedFriendName: string;
    selectedMemo: string;
};

const FriendEditModal = ({toggleEditModal,selectedFriendId, selectedFriendName, selectedMemo}: FriendEditModalPropsType) => {
    const [friendName, setFriendName] = useState(selectedFriendName);
    const [memo, setMemo] = useState(selectedMemo);
    const { isLoading, storeFriendData} = useStoreFriend();
    const user = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {id: selectedFriendId, friend_name: friendName, memo: memo, user_id: user?.user?.id || 0};
        console.log("formDataです。",formData);
        await updateFriend(selectedFriendId, formData);
        setFriendName("");
        setMemo("")
        toggleEditModal();
    }

    const handleOverlayClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        if (target.classList.contains('overlay')) {
            toggleEditModal();
        }
    };

    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleEditModal();
    };

    return (
        <div className="modal">
            <EditOverlay onClick={handleOverlayClick}/>
            <div className="modal_container">
                <FriendEditForm
                    onSubmit={handleSubmit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value)}
                    friendName={friendName}
                    onChange1={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMemo(e.target.value)}
                    memo={memo}
                    onClick={handleClose}
                />
            </div>
        </div>
    )
}

export default FriendEditModal;
