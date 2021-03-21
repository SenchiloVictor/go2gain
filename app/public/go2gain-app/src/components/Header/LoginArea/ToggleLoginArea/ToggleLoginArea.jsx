import React, { useCallback} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import get from "lodash/get";
import { toggleLoginPanel } from "../../../../actions/front/loginpanel";


const LoginButton = () => {

    const dispatch = useDispatch();
    const isShowed = useSelector(store => get(store, 'loginpanelReducer.show', []), shallowEqual);

    const toggleLoginPanelCallback = useCallback((e) => {

        dispatch(
            toggleLoginPanel(
                !isShowed
            )
        );
    }, [ dispatch, isShowed ]);

    return (
        <span onClick={ toggleLoginPanelCallback } id="login-panel"><i className="icon-user" />Login Area</span>
    );
};

export default LoginButton;
