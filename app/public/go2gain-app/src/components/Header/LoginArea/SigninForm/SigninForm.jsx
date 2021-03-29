import React from 'react';
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {emailRegex} from '../../../../helpers/regexp';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import get from "lodash/get";
import { AUTH_SIGNIN_PENDING } from "../../../../actions/actions";
import {signinRequest} from "../../../../actions/authorization/signin";

const SigninForm = (props) => {

    const dispatch = useDispatch();
    const authErrors = useSelector(store => get(store, 'authReducer.errors', null), shallowEqual);

    const handleSubmit = async (values) => {

        const { email, password } = values;

        dispatch({type: AUTH_SIGNIN_PENDING});
        dispatch(signinRequest(email, password));
    }

    return (
        <Formik
            autoComplete='off'
            initialValues={{
                email: '',
                password: '',
                remember: false,
            }}
            validate={values => {
                const errors = {};

                if (!values.email) {

                    errors.email = 'E-mail is required';
                } else if (!emailRegex.test(values.email)) {

                    errors.email = 'E-mail is invalid';
                }

                if (!values.password) {
                    errors.password = 'Password is required';
                }

                return errors;
            }}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                  errors,
              }) => (
                <Form>

                    <div className="form-inputs clearfix">
                        <p className="login-text">
                            <Field
                                placeholder='E-mail'
                                type='text'
                                name='email'
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                                value={ values.email }
                                maxLength={ 80 }
                                disabled={ isSubmitting }
                            />
                            <i className="icon-user" />
                            { errors.email ? <span className="form-error">{ errors.email }</span> : null }
                        </p>
                        <p className='login-password'>
                            <Field
                                placeholder='Password'
                                name='password'
                                type='password'
                                disabled={ isSubmitting }
                            />
                            <i className="icon-lock" />
                            <a href="#">Forget</a>
                            { errors.password ? <span className="form-error">{ errors.password }</span> : null }
                        </p>
                    </div>
                    <p className="form-submit login-submit">
                        <button type="submit" className='button color small login-submit submit' disabled={ isSubmitting }>
                            Log in
                        </button>
                    </p>
                    <div className="rememberme">
                        <label>
                            <Field type='checkbox' name='remember' />
                            Remember Me
                        </label>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default SigninForm;
