import React from 'react';
import {Link} from "react-router-dom";
import './_Header.scss';




const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="/img/secondaryLogo.png" alt="ロゴ"/>
            </div>
            <div className="header__nav">
                <Link to='/'>ログアウト</Link>
            </div>
        </header>
    )
}

export default Header;
