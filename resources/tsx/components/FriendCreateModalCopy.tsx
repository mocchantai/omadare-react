import React, {useState} from 'react';
import "./_FriendCreateModal.scss";
import useStoreFriend from "../hooks/useStoreFriend";
import {FriendType} from "../types";
import {FriendListPage} from "../pages/index";

type FriendCreateModalProps = {
    onClose: () => void;
};


function Overlay(props: { onClick: (e: React.MouseEvent) => void }) {
    return <div className="overlay" onClick={props.onClick}></div>;
}

const FriendCreateModal = ({onClose}: FriendCreateModalProps) => {
    const [friendName, setFriendName] = useState("");
    const [memo, setMemo] = useState("");
    const {data, isLoading, createFriendData} = useStoreFriend();
    const FriendList = FriendListPage();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData: FriendType = {friend_name:friendName, memo: memo, user_id: 1};//とりあえずid,use_id1にする
        console.log(formData);
        await createFriendData(formData);
        setFriendName("");
        setMemo("")
        onClose();
    }
    const handleOverlayClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if ((e.target as HTMLElement).classList.contains('overlay')) {
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
                <form onSubmit={handleSubmit} className="create_form">
                    <label htmlFor="friend_name">名前</label>
                    <input onChange={(e) => setFriendName(e.target.value)} value={friendName} name="friend_name"
                           type="text" className="create_form__friend_name"/>
                    <label htmlFor="memo">メモ</label>
                    <textarea onChange={(e) => setMemo(e.target.value)} value={memo} name="memo" id=""
                              className="create_form__memo"></textarea>
                    <button className="create_form__submit_button">送信</button>
                    <button className="create_form__close_button" onClick={handleClose}>閉じる</button>
                </form>
            </div>
        </div>
    )
}

export default FriendCreateModal;
