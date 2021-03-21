import { FRONT_CHANNELS_FETCHING, FRONT_SET_CHANNELS } from "../actions/actions";

const initialState = {
    loading: false,
    loaded: false,
    list: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case FRONT_SET_CHANNELS:
            return {
                ...state,
                ...{
                    loaded: true,
                    loading: false,
                    list: [
                        ...action.payload
                    ],
                }
            };

        case FRONT_CHANNELS_FETCHING:
            return {
                ...state,
                ...{
                    loading: true,
                    loaded: false,
                    list: [],
                }
            };

        default:
            return state;
    }
}

export default reducer;
