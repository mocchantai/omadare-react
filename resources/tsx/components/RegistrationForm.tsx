import React, {useState} from 'react';
import {useLoginUser, useStoreUser} from "../hooks";
import {CredentialsType, UserType} from "../types";

const RegistrationForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLoading, storeUserData} = useStoreUser();


    const handleSubmit: React.MouseEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, email, password)
        const formData: UserType = {name, email, password};
        await storeUserData(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form" name="login_form">
            <div className="form-header">
                <h1 className="form-header__title">新規登録</h1>
                <p className="form-header__description">お名前、メールアドレス、パスワードを入力してください。</p>
            </div>
            <div className="form-contents">
                <input onChange={(e) => setName(e.target.value)} className="form-contents__input" type="id" name="name" placeholder="お名前" />
                <input onChange={(e) => setEmail(e.target.value)} className="form-contents__input" type="id" name="email" placeholder="メールアドレス" />
                <input onChange={(e) => setPassword(e.target.value)} className="form-contents__input" type="password" name="password" placeholder="パスワード" />
                <input className="form-contents__input--submit"  type="submit" name="botton" value="ログイン" />
            </div>
        </form>
    );
};

export default RegistrationForm;
