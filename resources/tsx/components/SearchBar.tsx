import React from 'react';
import './_SearchBar.scss';

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input type="text" className="search_bar__textbox" placeholder="検索..." />
            <div className="search_bar__icon">
                <img src="/images/search_icon.svg" alt="検索アイコン" />
            </div>
        </div>

    )
}

export default SearchBar;
