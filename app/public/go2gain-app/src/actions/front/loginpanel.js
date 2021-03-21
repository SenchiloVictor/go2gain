import { FRONT_TOGGLE_LOGIN_PANEL } from "../actions";

const toggleLoginPanel = status => ({
    type: FRONT_TOGGLE_LOGIN_PANEL,
    payload: status,
});

export {
    toggleLoginPanel
}
