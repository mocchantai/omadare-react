import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { StartPage, LoginPage, RegistrationPage, FriendListPage } from './pages/index';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/friend" element={<FriendListPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
