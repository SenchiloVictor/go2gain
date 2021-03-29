import axios from "axios";
import {AUTH_SIGNIN_FAILED, AUTH_SIGNIN_PENDING, AUTH_SIGNIN_SUCCESSFUL} from "../actions";
import {useLocalStorage} from "../../hooks/useLocalStorage";

const signinFailed = (errors) => ({
    type: AUTH_SIGNIN_FAILED,
    payload: {
        errors
    },
})

const signinSuccessful = (token) => ({
    type: AUTH_SIGNIN_SUCCESSFUL,
    payload: {
        token
    }
});

const signinRequest = (email, password) => {

    const formData  = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    return dispatch => {

        axios('http://localhost:8081/api/v1/auth/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: formData
        }).then(({ data: { token } }) => {

            dispatch(signinSuccessful(token));
        }, ({ response }) => {

            dispatch(signinFailed(response.data.errors));
        });
    }
}

const profileRequest = (token) => {

    return dispatch => {

        axios('http://localhost:8081/api/v1/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {


        }, ({response: { data, status }}) => {

            dispatch(
                signinFailed(data.errors)
            );
        });
    }
}

export {
    signinRequest,
    profileRequest,
    signinSuccessful,
    signinFailed
}
