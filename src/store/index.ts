import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({});

const rootMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, rootMiddleware);

export { store };
