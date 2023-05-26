import React, {useState} from 'react';
import "./_FriendCreateModal.scss";
import useStoreFriend from "../hooks/useStoreFriend";
import {FriendType} from "../types";
import {FriendCreateModalProps, FriendCreateFormProps} from "../types/index";


const Overlay = (props: { onClick: (e: React.MouseEvent) => void }) => {
    return <div className="overlay" onClick={props.onClick}></div>;
}


const FriendCreateForm = (props: FriendCreateFormProps) => {
    return (
        <form onSubmit={props.onSubmit} className="create_form">
            <label htmlFor="friend_name">名前</label>
            <input onChange={props.onChange} value={props.value} name="friend_name"
                   type="text" className="create_form__friend_name"/>
            <label htmlFor="memo">メモ</label>
            <textarea onChange={props.onChange1} value={props.value1} name="memo" id=""
                      className="create_form__memo"></textarea>
            <button className="create_form__submit_button">送信</button>
            <button type="button" className="create_form__close_button" onClick={props.onClick}>閉じる</button>
        </form>
    )
};


const FriendCreateModal = ({onClose}: FriendCreateModalProps) => {
    const [friendName, setFriendName] = useState("");
    const [memo, setMemo] = useState("");
    const {data, isLoading, createFriendData} = useStoreFriend();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData: FriendType = {friend_name: friendName, memo: memo, user_id: 1};//とりあえずid,use_id1にする
        console.log(formData);
        await createFriendData(formData);
        setFriendName("");
        setMemo("")
        onClose();
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
                    onChange={(e) => setFriendName(e.target.value)}
                    value={friendName}
                    onChange1={(e) => setMemo(e.target.value)}
                    value1={memo}
                    onClick={handleClose}
                />
            </div>
        </div>
    )
}

export default FriendCreateModal;
