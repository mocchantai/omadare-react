import React, {useEffect, useState} from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton, FriendCreateModal,} from "../components/index";
import "./_FriendListPage.scss";
import {useSearchFriend} from "../hooks";


const FriendListPage = () => {


    //検索バー
    const [keyword, setKeyword] = useState("");
    const { data, isLoading } = useSearchFriend(keyword);


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (data) {
            console.log(data);
        }
        console.log(keyword);
        setKeyword("");
    }


    //モーダル
    const [isModalOpen, setIsModalOpen] = useState(false);

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


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <div className="whole_page">
            <Header />
            <SearchBar onSearch={handleSearch} keyword={keyword} setKeyword={setKeyword}/>
            <FriendList />
            {isModalOpen && <FriendCreateModal onClose={toggleModal} />}
            {/*<FriendEditModal />*/}
            {/*<button onClick={toggleModal} >OpenModal</button>*/}
            <ModalOpenButton onOpen={toggleModal} />
        </div>
    );
};

export default FriendListPage;
