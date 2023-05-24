import React from 'react';
import './_SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input className="search_bar__textbox" type="text" placeholder="検索"/>
            <a className="search_bar__icon" href="#">
                <img src="/images/search_icon.svg" alt="検索アイコン"/>
            </a>
        </div>
    )
}

export default SearchBar;
