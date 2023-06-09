import {FriendEditFormPropsType} from "../types";
import React, {useContext} from "react";
import "./_FriendCreateForm.scss";
import {UserContext} from "../contexts/UserContext";

const FriendEditForm = ({onSubmit, onChange, friendName, onChange1, memo, onClick, onDestroy}: FriendEditFormPropsType) => {

    const user = useContext(UserContext);

    return (
        <form onSubmit={onSubmit} className="create_form">
            <h4>編集モーダル</h4>
            <input type="hidden" name="user_id" value={user?.user?.id}/>
            <label htmlFor="friend_name">名前</label>
            <input onChange={onChange}
                   value={friendName} name="friend_name"
                   type="text"
                   className="create_form__friend_name"
            />
            <label htmlFor="memo">メモ</label>
            <textarea onChange={onChange1}
                      value={memo}
                      name="memo"
                      className="create_form__memo">
            </textarea>
            <div className="button_container">
                <button className="button_container__submit_button">編集する</button>
                <button onClick={onDestroy} className="button_container__destroy_button">削除する</button>
            </div>
            <button type="button" className="create_form__close_button" onClick={onClick}>閉じる</button>
        </form>
    )
};

export default FriendEditForm;
