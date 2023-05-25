import React from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton} from "../components/index";
import "./_FriendListPage.scss";


const FriendListPage = () => {
    return(
        <div className="whole_page">
            <Header />
            <SearchBar />
            <FriendList />
            <ModalOpenButton />
        </div>
    )
}

export default FriendListPage;
