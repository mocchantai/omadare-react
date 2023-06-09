import React, {useContext, useState} from 'react';
import "./_FriendCreateModal.scss";
import {useStoreFriend} from "../hooks";
import {FriendEditForm, EditOverlay} from "./index";
import {UserContext} from "../contexts/UserContext";
import {destroyFriend, fetchFriends, updateFriend} from "../services";

type FriendEditModalPropsType = {
    selectedFriendId: number;
    toggleEditModal: () => void;
    selectedFriendName: string;
    selectedMemo: string;
    onRefetch: () => void;
};

const FriendEditModal = ({toggleEditModal,selectedFriendId, selectedFriendName, selectedMemo, onRefetch}: FriendEditModalPropsType) => {
    const [friendName, setFriendName] = useState(selectedFriendName);
    const [communityName, setCommunityName] = useState("");
    const [memo, setMemo] = useState(selectedMemo);
    const { isLoading, storeFriendData} = useStoreFriend();
    const user = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {id: selectedFriendId, friend_name: friendName, community_name: communityName, memo: memo, user_id: user?.user?.id || 0};
        await updateFriend(selectedFriendId, formData);
        setFriendName("");
        setCommunityName("");
        setMemo("")
        toggleEditModal();
        onRefetch();
    }


    const handleDestroy = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {id: selectedFriendId, friend_name: friendName, memo: memo, user_id: user?.user?.id || 0};
        await destroyFriend(selectedFriendId);
        toggleEditModal();
        onRefetch();
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
                    onChangeFriendName={(e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value)}
                    friendName={friendName}
                    onChangeCommunityName={(e: React.ChangeEvent<HTMLInputElement>) => setCommunityName(e.target.value)}
                    communityName={communityName}
                    onChangeMemo={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMemo(e.target.value)}
                    memo={memo}
                    onClick={handleClose}
                    onDestroy={handleDestroy}
                />
            </div>
        </div>
    )
}

export default FriendEditModal;
