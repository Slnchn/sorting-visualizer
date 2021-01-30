import { createStore, combineReducers, applyMiddleware, CombinedState } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IAppState } from './init-states/app';
import { TSettingsState } from './init-states/settings.init-state';

// reducers
import appReducer from './reducers/app.reducer';
import settingsReducer from './reducers/settings.reducer';

const rootReducer = combineReducers({
  appState: appReducer,
  settingsState: settingsReducer,
});

const rootMiddleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, rootMiddleware);

export type TStore = CombinedState<{
  appState: IAppState;
  settingsState: TSettingsState;
}>;

export { store };
