import React from 'react';
import "./_FriendCreateModal.scss";

const FriendCreateModal = () => {
    return (
        <div className="modal">
            <div className="layer">
                <div className="modal_container">
                    <form action="" className="create_form">
                        <input type="text" className="create_form__friend_name"/>
                        <textarea name="" id="" className="create_form__memo"></textarea>
                        <button className="create_form__submit_button">送信</button>
                        <button className="create_form__close_button">閉じる</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FriendCreateModal;
