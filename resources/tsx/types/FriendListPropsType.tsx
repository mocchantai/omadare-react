import {FriendType} from "./index";

type FriendListPropsType = {
    toggleEditModal: () => void;
    selectedFriend: (friend: FriendType) => void;
    keyword: string;
    searchData: FriendType[];
    isSearchLoading: boolean;
    isModalOpen: boolean;
}

export default FriendListPropsType;
