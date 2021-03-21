import { FRONT_SET_CHANNELS, FRONT_CHANNELS_FETCHING } from "../actions";

export const setFrontChannels = list => ({
    type: FRONT_SET_CHANNELS,
    payload: list || [],
});

export const fetchFrontChannels = () => async dispatch => {
    const res = await fetch('http://localhost:8081/api/v1/front/channel');
    const list = await res.json();
    const { channels } = list;

    dispatch(
        setFrontChannels(channels)
    );
}

export const isFetchingChannels = () => ({
    type: FRONT_CHANNELS_FETCHING
})