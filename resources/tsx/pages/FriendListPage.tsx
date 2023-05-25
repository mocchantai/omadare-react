import React from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton, FriendCreateModal,} from "../components/index";
import "./_FriendListPage.scss";


const FriendListPage = () => {
    return(
        <div className="whole_page">
            <Header />
            <SearchBar />
            {/*<FriendList />*/}
            <FriendCreateModal />
            {/*<FriendEditModal />*/}
            <ModalOpenButton />
        </div>
    )
}

export default FriendListPage;
