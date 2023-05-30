import React from 'react';
import {Link} from "react-router-dom";
import './_Header.scss';




const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="/images/secondary_logo.png" alt="ロゴ" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">ログアウト</Link>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;
