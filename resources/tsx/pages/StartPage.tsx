import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_StartPage.scss';

const StartPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // Navigate to LoginPage
    };

    const handleRegistration = () => {
        navigate('/registration'); // Navigate to RegistrationPage
    };

    return (
        <div className="start-page">
            <button className="start-page__button" onClick={handleLogin}>Go to Login</button>
            <button className="start-page__button" onClick={handleRegistration}>Go to Registration</button>
        </div>
    );
};

export default StartPage;
