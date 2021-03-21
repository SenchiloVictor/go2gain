import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import mainpageReducer from './reducers/mainpage';
import loginpanelReducer from './reducers/header/loginpanel';
import authReducer from './reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    mainpageReducer,
    loginpanelReducer,
    authReducer
});

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export {
    store
}
