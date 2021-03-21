import axios from "axios";
import {AUTH_SIGNIN_FAILED, AUTH_SIGNIN_PENDING, AUTH_SIGNIN_SUCCESSFUL} from "../actions";


const signinFailed = (errors) => ({
    type: AUTH_SIGNIN_FAILED,
    payload: {
        errors
    },
})

const signinSuccessful = (token) => ({
    type: AUTH_SIGNIN_SUCCESSFUL,
    payload: {
        token,
        errors: {}
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
        }).then(response => {

            dispatch(
                signinSuccessful(
                    response.data.token
                )
            );
        }, ({ response }) => {

            dispatch(
                signinFailed(
                   response.data.errors
                )
            );
        });
    }
}

export {
    signinRequest,
    signinSuccessful
}
