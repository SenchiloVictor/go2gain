import { Field, Form, Formik } from 'formik';
import get from 'lodash/get';
import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { signupPending, signupRequest } from '../../../../actions/authorization/signup';
import { emailRegex } from '../../../../helpers/regexp';

const SignupForm = () => {

    const dispatch = useDispatch();
    const authErrors = useSelector(store => get(store, 'authReducer.errors', null), shallowEqual);

    const handleSubmit = async (values, { setErrors }) => {

        const { email, password, passwordConfirm } = values;

        dispatch(signupPending());
        dispatch(signupRequest(
            email,
            password,
            passwordConfirm
        ));

        setErrors(authErrors);
    }

    const formValidator = values => {
        const errors = {};

        if (!values.email) {

            errors.email = 'E-mail is required';
        } else if (!emailRegex.test(values.email)) {

            errors.email = 'E-mail is invalid';
        }

        if (!values.password) {

            errors.password = 'Password is required';
        } else if (values.passwordConfirm.length && values.password !== values.passwordConfirm) {

            errors.password = 'Passwords do not match';
        }

        return errors;
    }

    return (
        <div className="page-content">
            <h2>Signup</h2>
            <div className="form-style form-style-3">
                <Formik
                    autoComplete='off'
                    initialValues={{
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    }}
                    validate={ formValidator }
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
                                <div className="login-text input-container">
                                    <div className='form-field'>
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
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className='login-password input-container'>
                                            <div className='form-field'>
                                                <Field
                                                    placeholder='Password'
                                                    name='password'
                                                    type='password'
                                                    disabled={ isSubmitting }
                                                />
                                                <i className="icon-lock" />
                                                { errors.password ? <span className="form-error">{ errors.password }</span> : null }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='login-password input-container'>
                                            <div className='form-field'>
                                                <Field
                                                    placeholder='Password confirm'
                                                    name='passwordConfirm'
                                                    type='password'
                                                    disabled={ isSubmitting }
                                                />
                                                <i className="icon-lock" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="form-submit login-submit">
                                <button type="submit" className='button color small login-submit submit' disabled={ isSubmitting }>
                                    Signup
                                </button>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignupForm;
