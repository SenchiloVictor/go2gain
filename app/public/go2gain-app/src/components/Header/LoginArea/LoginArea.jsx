import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import get from 'lodash/get';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';

const LoginArea = () => {
    const isShowed = useSelector(store => get(store, 'loginpanelReducer.show', []), shallowEqual);
    const loginPanelClass = `login-panel ${isShowed ? 'active' : ''}`;

    const [ authForm, setAuthForm ] = useState('signin');

    return (
            <div className={ loginPanelClass }>
                <section className="container">
                    <div className="row">
                        <div className="col-md-6">
                            { authForm === 'signin' ? <SigninForm /> : <SignupForm /> }
                        </div>
                        <div className="col-md-6">
                            <div className="page-content register">
                                <h2>{ authForm === 'signin' ? 'Sugnup Now' : 'Signin Now' }</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravdio, sit
                                    amet suscipit risus ultrices eu. Fusce viverra neque at purus laoreet consequa. Vivamus
                                    vulputate posuere nisl quis consequat.</p>
                                <button
                                    onClick={ () => { authForm === 'signin' ? setAuthForm('signup') : setAuthForm('signin') }}
                                    className="button color small signup"
                                >{ authForm === 'signin' ? 'Create an account' : 'Signin' }</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default LoginArea;