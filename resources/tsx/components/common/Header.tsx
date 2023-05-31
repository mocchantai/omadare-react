import React from 'react';
import './_Header.scss';
import {useLogoutUser} from "../../hooks";

const Header = () => {

    const {data, isLoading, logoutUser} = useLogoutUser();

    const handleLogout = async () => {
        await logoutUser();
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img src="/images/secondary_logo.png" alt="ロゴ" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        {/*<Link to="/">ログアウト</Link>*/}
                        <a onClick={handleLogout}>ログアウト</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;
