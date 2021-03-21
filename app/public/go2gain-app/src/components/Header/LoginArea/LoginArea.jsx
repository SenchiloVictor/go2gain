import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import get from "lodash/get";
import SigninForm from "./SigninForm";

const LoginArea = () => {
    const isShowed = useSelector(store => get(store, 'loginpanelReducer.show', []), shallowEqual);
    const loginPanelClass = `login-panel ${isShowed ? 'active' : ''}`;

    return (
            <div className={ loginPanelClass }>
                <section className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="page-content">
                                <h2>Login</h2>
                                <div className="form-style form-style-3">
                                    <SigninForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page-content Register">
                                <h2>Register Now</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravdio, sit
                                    amet suscipit risus ultrices eu. Fusce viverra neque at purus laoreet consequa. Vivamus
                                    vulputate posuere nisl quis consequat.</p>
                                <a className="button color small signup">Create an account</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default LoginArea;