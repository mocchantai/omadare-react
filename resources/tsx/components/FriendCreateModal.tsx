import React from 'react';
import "./_FriendCreateModal.scss";

type FriendCreateModalProps = {
    onClose: () => void;
};


const FriendCreateModal = ({onClose}: FriendCreateModalProps) => {


    return (
        <div className="modal">
            <div className="overlay"></div>
                <div className="modal_container">
                    <form action="" className="create_form">
                        <label htmlFor="friend_name">名前</label>
                        <input name="friend_name" type="text" className="create_form__friend_name"/>
                        <label htmlFor="memo">メモ</label>
                        <textarea name="memo" id="" className="create_form__memo"></textarea>
                        <button className="create_form__submit_button">送信</button>
                        <button className="create_form__close_button" onClick={onClose}>閉じる</button>
                    </form>
                </div>
        </div>
    )
}

export default FriendCreateModal;
