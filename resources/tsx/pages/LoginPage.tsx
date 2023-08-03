import React from 'react';
import "./_Loginpage.scss";
import {Header, LoginForm} from "../components";


const LoginPage = () => {
    return(

        <div className="login-page">
            <Header />
            <LoginForm />
        </div>
    )
}


export default LoginPage;
