import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './_StartPage.scss';
import {UserContext} from "../contexts/UserContext";

const StartPage = () => {
    const user = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegistration = () => {
        navigate('/registration');
    };

    return (
        <div className="start-page">
            <img src="/images/secondary_logo.png" alt="ロゴ" className="start-page__logo" />
            <h1 className="start-page__title">おまだれ？</h1>
            <div className="start-page__buttons">
                <button className="start-page__button start-page__button--login" onClick={handleLogin}>ログイン</button>
                <button className="start-page__button start-page__button--registration" onClick={handleRegistration}>新規登録</button>
            </div>
        </div>
    );
};

export default StartPage;
