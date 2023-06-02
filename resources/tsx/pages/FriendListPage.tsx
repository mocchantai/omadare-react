import React, {useEffect, useState} from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton, FriendCreateModal, FriendEditModal,} from "../components/index";
import "./_FriendListPage.scss";
import {useSearchFriend} from "../hooks";


const FriendListPage = () => {
    //検索バー
    const [keyword, setKeyword] = useState("");
    const { data, isLoading } = useSearchFriend(keyword);


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setKeyword("");
    }

    //モーダル
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');

        }
    }, [isModalOpen])

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <div className="whole_page">
            <Header />
            <SearchBar onSearch={handleSearch} keyword={keyword} setKeyword={setKeyword}/>
            <FriendList handleSample={toggleEditModal} keyword={keyword} searchData={data} isSearchLoading={isLoading} isModalOpen={isModalOpen}/>
            {isModalOpen && <FriendCreateModal onClose={toggleModal} />}
            {isEditModalOpen && <FriendEditModal toggleEditModal={toggleEditModal} />}
            <ModalOpenButton onOpen={toggleModal} />
        </div>
    );
};

export default FriendListPage;
