import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {StartPage, LoginPage, RegistrationPage, FriendListPage} from './pages/index';
import {UserProvider} from "./contexts/UserContext";

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/friend" element={<FriendListPage/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
};

export default App;
