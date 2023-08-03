import React, {useContext, useEffect, useState} from 'react';
import {Header, SearchBar, FriendList, ModalOpenButton, FriendCreateModal, FriendEditModal,} from "../components/index";
import "./_FriendListPage.scss";
import {useFetchFriend, useSearchFriend} from "../hooks";
import {FriendType} from "../types";
import {fetchFriends} from "../services";
import {UserContext} from "../contexts/UserContext";


const FriendListPage = () => {
    //編集
    const [selectedFriendId, setSelectedFriendId] = useState<number | undefined>(0);
    const [selectedCommunityName, setSelectedCommunityName] = useState("");
    const [selectedFriendName, setSelectedFriendName] = useState("");
    const [selectedMemo, setSelectedMemo] = useState("");

    const selectedFriend = (friend: FriendType) => {
        setSelectedFriendId(friend.id);
        setSelectedFriendName(friend.friend_name);
        setSelectedCommunityName(friend.community_name);
        setSelectedMemo(friend.memo);
    }

    //検索バー
    const [keyword, setKeyword] = useState("");
    const {data, isLoading} = useSearchFriend(keyword);

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

    type toggleEditModalType = {
        toggleEditModal: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    }

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };

    useEffect(() => {
        if (isEditModalOpen) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');

        }
    }, [isEditModalOpen])

    //一覧データの更新
    const [refetchedFriends, setRefetchedFriends] = useState<FriendType[]>([]);
    const user = useContext(UserContext);

    const refechFriends = async () => {
        const response = await fetchFriends();
        const filteredData= response.filter((friend) => friend.user_id === user?.user?.id);
        setRefetchedFriends(filteredData);
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="whole_page">
            <Header/>
            <SearchBar onSearch={handleSearch} keyword={keyword} setKeyword={setKeyword}/>
            <FriendList toggleEditModal={toggleEditModal} selectedFriend={selectedFriend} keyword={keyword}
                        searchData={data} isSearchLoading={isLoading} isModalOpen={isModalOpen} refetchedFriends={refetchedFriends}/>
            {isModalOpen && <FriendCreateModal onRefetch={refechFriends} onClose={toggleModal}/>}
            {isEditModalOpen &&
                <FriendEditModal selectedFriendId={selectedFriendId} selectedFriendName={selectedFriendName} selectedCommunityName={selectedCommunityName}
                                 selectedMemo={selectedMemo} toggleEditModal={toggleEditModal} onRefetch={refechFriends}/>}
            <ModalOpenButton onOpen={toggleModal}/>
        </div>
    );
};

export default FriendListPage;
