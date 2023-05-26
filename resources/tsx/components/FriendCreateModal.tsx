import React, {useState} from 'react';
import "./_FriendCreateModal.scss";
import useStoreFriend from "../hooks/useStoreFriend";
import {FriendType} from "../types";

type FriendCreateModalProps = {
    onClose: () => void;
};


const FriendCreateModal = ({onClose}: FriendCreateModalProps) => {
    const [friendName, setFriendName] = useState("");
    const [memo, setMemo] = useState("");
    // const [userId, setUserId] = useState(0);
    const {data, isLoading, createFriendData} = useStoreFriend();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData: FriendType = {friend_name:friendName, memo: memo, id: 1, user_id: 1};//とりあえずid,use_id1にする
        console.log(formData);
        await createFriendData(formData);
        setFriendName("");
        setMemo("")
    }
    const handleOverlayClick = (event: React.MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('overlay')) {
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="overlay" onClick={handleOverlayClick}></div>
                <div className="modal_container">
                    <form onSubmit={handleSubmit} className="create_form">
                        <label htmlFor="friend_name">名前</label>
                        <input onChange={(e) => setFriendName(e.target.value)} value={friendName} name="friend_name" type="text" className="create_form__friend_name"/>
                        <label htmlFor="memo">メモ</label>
                        <textarea onChange={(e) => setMemo(e.target.value)} value={memo} name="memo" id="" className="create_form__memo"></textarea>
                        <button className="create_form__submit_button">送信</button>
                        <button className="create_form__close_button" onClick={onClose}>閉じる</button>
                    </form>
                </div>
        </div>
    )
}

export default FriendCreateModal;
