import React from 'react';
import "./_Loginpage.scss";


const LoginPage = () => {
    return(

        <div className="login-container">
            <form className="login-form" name="login_form">
                <div className="form-header">
                    <h1 className="form-header__title">ログイン</h1>
                    <p className="form-header__description">メールアドレス、パスワードを入力してください。</p>
                </div>
                <div className="form-contents">
                    <input className="form-contents__input" type="id" name="email" placeholder="メールアドレス" />
                    <input className="form-contents__input" type="password" name="password" placeholder="パスワード" />
                    <input className="form-contents__input--submit"  type="submit" name="botton" value="ログイン" />
                </div>
            </form>
        </div>
    )
}


export default LoginPage;
