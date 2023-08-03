import React from 'react';
import './_Header.scss';
import {useLogoutUser} from "../../hooks";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const {data, isLoading, logoutUser} = useLogoutUser();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();
        navigate('/');
    }

    return (
        <header className="header">
            <div className="header__logo">
                <img src="/images/secondary_logo.png" alt="ロゴ" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a onClick={handleLogout}>ログアウト</a>
                    </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;
