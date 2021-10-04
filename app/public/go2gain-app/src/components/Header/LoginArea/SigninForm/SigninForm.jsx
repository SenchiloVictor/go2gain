import React from 'react';
import { Formik, Form, Field } from 'formik';
import { emailRegex } from '../../../../helpers/regexp';
import { useDispatch } from 'react-redux';
import { signinRequest, signinPending } from '../../../../actions/authorization/signin';

const SigninForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = async (values, { setErrors }) => {

        dispatch(
            signinPending()
        );

        dispatch(
            signinRequest(
                values,
                setErrors
            )
        );
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
        }

        return errors;
    }

    return (
        <div className="page-content">
            <h2>Login</h2>
            <div className="form-style form-style-3">
                <Formik
                    autoComplete='off'
                    initialValues={{
                        email: '',
                        password: '',
                        remember: false,
                    }}
                    validate={formValidator}
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
                                <div className="login-text">
                                    <div className='form-field input-container'>
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
                                    <a href="#">Forget</a>
                                </div>
                            </div>
                            <p className="form-submit login-submit">
                                <button type="submit" className='button color small login-submit submit' disabled={ isSubmitting }>
                                    Signin
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
            </div>
        </div>
    );
}

export default SigninForm;
