import {
    AUTH_SIGNIN_FAILED,
    AUTH_SIGNIN_PENDING,
    AUTH_SIGNIN_SUCCESSFUL,
    AUTH_SIGNUP_FAILED,
    AUTH_SIGNUP_PENDING,
    AUTH_SIGNUP_SUCCESSFUL
} from '../actions/actions';

const initialState = {
    token: null,
    signinRequesting: false,
    signupRequesting: false,
    signupComplete: null,
    authorized: null,
    errors: {}
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTH_SIGNIN_SUCCESSFUL:

            return {
                ...state,
                ...{
                    signinRequesting: false,
                    signupRequesting: false,
                    authorized: true,
                    errors: {},
                    ...action.payload,
                }
            };

        case AUTH_SIGNIN_FAILED:

            return {
                ...state,
                ...{
                    signinRequesting: false,
                    authorized: false,
                    token: null,
                    ...action.payload
                }
            };

        case AUTH_SIGNIN_PENDING:

            return {
                ...state,
                ...{
                    signinRequesting: true,
                    authorized: null,
                    token: null,
                    errors: {}
                }
            };

        case AUTH_SIGNUP_PENDING :

            return {
                ...state,
                ...{
                    signupRequesting: true,
                    signupComplete: null,
                    errors: {}
                }
            };

        case AUTH_SIGNUP_FAILED :

            return {
                ...state,
                ...{
                    signupRequesting: false,
                    signupComplete: false,
                    ...action.payload
                }
            };

        case AUTH_SIGNUP_SUCCESSFUL :

            return {
                ...state,
                ...{
                    signupRequesting: false,
                    signupComplete: true,
                    ...action.payload
                }
            };

        default:

            return state;
    }
};

export default reducer;
