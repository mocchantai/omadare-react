import React from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton} from "../components/index";



const FriendListPage = () => {
    return(
        <div>
            <Header />
            <SearchBar />
            <FriendList />
            <ModalOpenButton />
        </div>
    )
}

export default FriendListPage;
