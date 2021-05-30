import axios from 'axios';
import { AUTH_SIGNUP_FAILED, AUTH_SIGNUP_PENDING, AUTH_SIGNUP_SUCCESSFUL } from '../actions';

const signupPending = () => ({
    type: AUTH_SIGNUP_PENDING
});

const signupFailed = (errors) => ({
    type: AUTH_SIGNUP_FAILED,
    payload: {
        errors
    }
});

const signupSuccessful = (response) => ({
    type: AUTH_SIGNUP_SUCCESSFUL,
    payload: {
        response
    }
});

const signupRequest = (values, setErrors) => {

    const { email, password, passwordConfirm } = values;

    const formData  = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    formData.append('passwordConfirm', passwordConfirm);

    return dispatch => {

        axios('http://localhost:8081/api/v1/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formData
        }).then(({ data }) => {

            dispatch(
                signupSuccessful(data)
            );
        }, ({ response: { data: { errors } } }) => {

            setErrors(
                errors
            );

            dispatch(
                signupFailed(errors)
            );
        });
    }
}

export {
    signupPending,
    signupFailed,
    signupRequest
};
