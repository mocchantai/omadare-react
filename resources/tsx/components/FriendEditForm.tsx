import {FriendCreateFormPropsType} from "../types";
import React, {useContext} from "react";
import "./_FriendCreateForm.scss";
import {UserContext} from "../contexts/UserContext";

const FriendEditForm = (props: FriendCreateFormPropsType) => {

    const user = useContext(UserContext);

    return (
        <form onSubmit={props.onSubmit} className="create_form">
            <h4>編集モーダル</h4>
            <input type="hidden" name="user_id" value={user?.user?.id}/>
            <label htmlFor="friend_name">名前</label>
            <input onChange={props.onChange}
                   value={props.value} name="friend_name"
                   type="text"
                   className="create_form__friend_name"
            />
            <label htmlFor="memo">メモ</label>
            <textarea onChange={props.onChange1}
                      value={props.value1}
                      name="memo"
                      className="create_form__memo">
            </textarea>
            <button className="create_form__submit_button">送信</button>
            <button type="button" className="create_form__close_button" onClick={props.onClick}>閉じる</button>
        </form>
    )
};

export default FriendEditForm;
