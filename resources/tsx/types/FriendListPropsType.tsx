import {FriendType} from "./index";

type FriendListPropsType = {
    handleSample: () => void;
    keyword: string;
    searchData: FriendType[];
    isSearchLoading: boolean;
    isModalOpen: boolean;
}

export default FriendListPropsType;
