import {FriendType} from "./index";

type FriendListPropsType = {
    keyword: string;
    searchData: FriendType[];
    isSearchLoading: boolean;
    isModalOpen: boolean;
}

export default FriendListPropsType;
