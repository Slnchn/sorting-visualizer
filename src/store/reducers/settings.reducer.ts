import ESettingsActionTypes from '../action-types/settings.action-types';
import { TSettingsAction } from '../actions/settings.actions';
import { settingsInitState, ISettingsState } from '../init-states/settings';

export default (
  state: ISettingsState = settingsInitState,
  action: TSettingsAction
): ISettingsState => {
  switch (action.type) {
    case ESettingsActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, isSidebarActive: !state.isSidebarActive };
    }
    default: {
      return state;
    }
  }
};
