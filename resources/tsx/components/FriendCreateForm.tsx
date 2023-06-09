import {FriendCreateFormPropsType} from "../types";
import React, {useContext} from "react";
import "./_FriendCreateForm.scss";
import {UserContext} from "../contexts/UserContext";

const FriendCreateForm = (props: FriendCreateFormPropsType) => {

    const user = useContext(UserContext);

    return (
        <form onSubmit={props.onSubmit} className="create_form">
            <input type="hidden" name="user_id" value={user?.user?.id}/>
            <label htmlFor="friend_name">名前</label>
            <input onChange={props.onChange}
                   value={props.friendName} name="friend_name"
                   type="text"
                   className="create_form__friend_name"
            />
            <label htmlFor="memo">メモ</label>
            <textarea onChange={props.onChange1}
                      value={props.memo}
                      name="memo"
                      className="create_form__memo">
            </textarea>
            <button className="create_form__submit_button">送信</button>
            <button type="button" className="create_form__close_button" onClick={props.onClick}>閉じる</button>
        </form>
    )
};

export default FriendCreateForm;
