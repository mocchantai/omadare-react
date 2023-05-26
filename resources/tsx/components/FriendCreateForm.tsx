import {FriendCreateFormProps} from "../types";
import React from "react";
import "./_FriendCreateForm.scss";

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

export default FriendCreateForm;
