import React, {useState} from 'react';
import './_SearchBar.scss';
import {useSearchFriend} from "../hooks";

type SearchBarProps = {
    onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    keyword: string;
    setKeyword: React.Dispatch<React.SetStateAction<string>>;
}


const SearchBar = ({onSearch, keyword, setKeyword}: SearchBarProps) => {


    return (
        <div className="search-bar">
            <form className="search-form" onSubmit={onSearch}>
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
