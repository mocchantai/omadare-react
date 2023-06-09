import React, {useState} from 'react';
import {useLoginUser, useStoreUser} from "../hooks";
import {CredentialsType, UserType} from "../types";

const RegistrationForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {data, isLoading, storeUserData} = useStoreUser();


    const handleSubmit: React.MouseEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
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
                <input onChange={(e) => setName(e.target.value)} className="form-contents__input" type="id" name="name" placeholder="お名前" value={name} />
                <input onChange={(e) => setEmail(e.target.value)} className="form-contents__input" type="id" name="email" placeholder="メールアドレス" value={email} />
                <input onChange={(e) => setPassword(e.target.value)} className="form-contents__input" type="password" name="password" placeholder="パスワード"  value={password} />
                <input className="form-contents__input--submit"  type="submit" name="botton" value="新規登録" />
            </div>
        </form>
    );
};

export default RegistrationForm;
