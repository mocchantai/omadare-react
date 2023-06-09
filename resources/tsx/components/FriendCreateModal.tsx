import React, {useContext, useState} from 'react';
import "./_FriendCreateModal.scss";
import {useStoreFriend} from "../hooks";
import {FriendType} from "../types";
import {FriendCreateModalPropsType} from "../types/index";
import {Overlay, FriendCreateForm} from "./index";
import {UserContext} from "../contexts/UserContext";
import {destroyFriend, fetchFriends} from "../services";

const FriendCreateModal = ({onRefetch, onClose}: FriendCreateModalPropsType) => {
    const [friendName, setFriendName] = useState("");
    const [communityName, setCommunityName] = useState("");
    const [memo, setMemo] = useState("");
    const { isLoading, storeFriendData} = useStoreFriend();
    const user = useContext(UserContext);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {id: 0,friend_name: friendName, community_name: communityName, memo: memo, user_id: user?.user?.id || 0};
        await storeFriendData(formData);
        setFriendName("");
        setCommunityName("");
        setMemo("")
        onClose();
        onRefetch();
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
                    onChangeFriendName={(e: React.ChangeEvent<HTMLInputElement>) => setFriendName(e.target.value)}
                    friendName={friendName}
                    onChangeCommunityName={(e: React.ChangeEvent<HTMLInputElement>) => setCommunityName(e.target.value)}
                    communityName={communityName}
                    onChangeMemo={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMemo(e.target.value)}
                    memo={memo}
                    onClick={handleClose}
                />
            </div>
        </div>
    )
}

export default FriendCreateModal;
