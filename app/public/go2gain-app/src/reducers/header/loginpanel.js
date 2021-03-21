import { FRONT_TOGGLE_LOGIN_PANEL } from "../../actions/actions";

const initialState = {
    show: false,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FRONT_TOGGLE_LOGIN_PANEL:
            return {
                ...state,
                ...{
                    show: action.payload
                }
            };

        default:
            return state;
    }
}

export default reducer;
