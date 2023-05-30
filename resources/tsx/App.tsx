import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { StartPage, LoginPage, RegistrationPage, FriendListPage } from './pages/index';

const App = () => {
    return (
        <BrowserRouter>
            <Link to='/login'>Login</Link><br/>
            <Link to='/registration'>Registration</Link><br/>
            <Link to='/friend'>Friend</Link><br/>

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
