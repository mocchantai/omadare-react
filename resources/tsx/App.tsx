import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { LoginPage, RegistrationPage, FriendListPage } from './pages/index';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/registration" element={<RegistrationPage />} />
//                 <Route path="/friendlist" element={<FriendListPage />} />
//             </Routes>
//         </Router>
//     );
// };
const App = () => {
    return (
        <>
            <LoginPage />
            <RegistrationPage />
            <FriendListPage />
        </>
    );
};

export default App;
