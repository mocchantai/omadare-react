import React, {useState} from 'react';
import {useLoginUser} from "../hooks";
import {CredentialsType} from "../types";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {user, isLoading, loginUser} = useLoginUser();

    const navigate = useNavigate();




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const credentials: CredentialsType = {email, password};
        await loginUser(credentials);


        navigate('/friend');

    };

    return (
        <form onSubmit={handleSubmit} className="login-form" name="login_form">
            <div className="form-header">
                <h1 className="form-header__title">ログイン</h1>
                <p className="form-header__description">メールアドレス、パスワードを入力してください。</p>
            </div>
            <div className="form-contents">
                <input onChange={(e) => setEmail(e.target.value)} className="form-contents__input" type="id" name="email" placeholder="メールアドレス" />
                <input onChange={(e) => setPassword(e.target.value)} className="form-contents__input" type="password" name="password" placeholder="パスワード" />
                <input className="form-contents__input--submit"  type="submit" name="botton" value="ログイン" />
            </div>
        </form>
    );
};

export default LoginForm;
