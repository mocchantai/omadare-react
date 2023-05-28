import React, {useState} from 'react';
import './_SearchBar.scss';
import {useSearchFriend} from "../hooks";
import {SearchBarPropsType} from "../types/index";


const SearchBar = ({onSearch, keyword, setKeyword}: SearchBarPropsType) => {

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
