import {FriendCreateFormPropsType} from "../types";
import React, {useContext, useEffect, useState, useRef} from "react";
import "./_FriendCreateForm.scss";
import {UserContext} from "../contexts/UserContext";



const FriendCreateForm = ({onSubmit, onChangeFriendName, friendName, onChangeCommunityName, communityName, onChangeMemo, memo, onClick}: FriendCreateFormPropsType) => {
    // const user = useContext(UserContext);


    return (
        <form onSubmit={onSubmit} className="create-form">
            {/*<input type="hidden" name="user_id" value={user?.user?.id}/>*/}
            <label htmlFor="friend_name">名前</label>
            <input
                onChange={onChangeFriendName}
                value={friendName}
                name="friend_name"
                type="text"
                className="create-form__friend-name"
            />
            <label htmlFor="friend_name">コミュニティ</label>
            <input
                onChange={onChangeCommunityName}
                value={communityName}
                name="community_name"
                type="text"
                className="create-form__community-name"
            />

            <label htmlFor="memo">メモ</label>
            <textarea
                onChange={onChangeMemo}
                value={memo}
                name="memo"
                className="create-form__memo"
            ></textarea>
            <button className="create-form__submit-button">送信</button>
            <button
                type="button"
                className="create-form__close-button"
                onClick={onClick}
            >
                閉じる
            </button>
        </form>
    );
};

export default FriendCreateForm;
