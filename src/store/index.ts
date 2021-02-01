import { createStore, combineReducers, applyMiddleware, CombinedState } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// states
import { IAppState } from './init-states/app';
import { ISettingsState } from './init-states/settings';

// sagas
import { watchSorting } from './sagas/app.sagas';

// reducers
import appReducer from './reducers/app.reducer';
import settingsReducer from './reducers/settings.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
  settingsState: settingsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const rootMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, rootMiddleware);

sagaMiddleware.run(watchSorting);

export type TStore = CombinedState<{
  appState: IAppState;
  settingsState: ISettingsState;
}>;

export { store };
