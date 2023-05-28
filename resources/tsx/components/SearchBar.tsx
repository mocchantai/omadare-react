import React, {useState} from 'react';
import './_SearchBar.scss';
import {useSearchFriend} from "../hooks";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const { data, isLoading } = useSearchFriend(keyword);


    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        console.log(keyword);
        setKeyword("");
    }

    return (
        <div className="search-bar">
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
                    type="text"
                    className="search-form__textbox"
                    placeholder="検索..."
                    value={keyword}
                />
                <button type="submit" className="search-form__icon">
                    <img src="/images/search_icon.svg" alt="検索アイコン" />
                </button>
            </form>
        </div>

    )
}

export default SearchBar;
