import {
    AUTH_SIGNIN_FAILED,
    AUTH_SIGNIN_PENDING,
    AUTH_SIGNIN_SUCCESSFUL
} from "../actions/actions";

const initialState = {
    token: null,
    signinRequesting: false,
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
                    authorized: true,
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
            }

        case AUTH_SIGNIN_PENDING:

            return {
                ...state,
                ...{
                    authorized: null,
                    token: null,
                    errors: {}
                }
            }
        default:
            return state;
    }
};

export default reducer;
