import axios from 'axios';
import { AUTH_SIGNUP_FAILED, AUTH_SIGNUP_PENDING } from '../actions';

const signupPending = () => ({
    type: AUTH_SIGNUP_PENDING
});

const signupFailed = (errors) => ({
    type: AUTH_SIGNUP_FAILED,
    payload: {
        errors
    }
});

const signupRequest = (email, password, passwordConfirm) => {
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
        }).then(({ data: { token } }) => {
            console.log('test');
            // dispatch(signinSuccessful(token));
        }, ({ response }) => {

            const { errors } = response.data;

            dispatch(signupFailed(errors));
        });
    }
}

export {
    signupPending,
    signupFailed,
    signupRequest
};
