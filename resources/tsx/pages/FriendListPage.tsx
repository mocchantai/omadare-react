import React, {useState} from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton, FriendCreateModal,} from "../components/index";
import "./_FriendListPage.scss";


const FriendListPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return(
        <div className="whole_page">
            <Header />
            <SearchBar />
            {/*<FriendList />*/}
            {isModalOpen && <FriendCreateModal onClose={toggleModal} />}
            {/*<FriendEditModal />*/}
            {/*<button onClick={toggleModal} >OpenModal</button>*/}
            <ModalOpenButton onOpen={toggleModal} />
        </div>
    );
};

export default FriendListPage;
