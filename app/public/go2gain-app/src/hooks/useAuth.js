import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useLocalStorage} from "./useLocalStorage";
import get from "lodash/get";
import {useEffect} from "react";
import {profileRequest, signinSuccessful} from "../actions/authorization/signin";

const useAuth = () => {

    const dispatch = useDispatch();
    const [ storageToken, setToken ] = useLocalStorage('token' );

    const authToken = useSelector(store => get(store, 'authReducer.token', null), shallowEqual);
    const authStatus = useSelector(store => get(store, 'authReducer.authorized', []), shallowEqual);

    useEffect(() => {

        if (null !== storageToken) {

            dispatch(signinSuccessful(storageToken));
            dispatch(profileRequest(storageToken));
        }
    }, [dispatch, storageToken]);

    useEffect(() => {

        if (null !== authToken && authToken !== storageToken) {

            setToken(authToken);
            dispatch(profileRequest(authToken));
        }
    }, [storageToken, authToken, setToken, dispatch]);

    return { authStatus, authToken }
}

export default useAuth;