import ESettingsActionTypes from 'store/action-types/settings.action-types';
import { TSettingsAction } from '../actions/settings.actions';
import { settingsInitState, TSettingsState } from '../init-states/settings.init-state';

export default (
  state: TSettingsState = settingsInitState,
  action: TSettingsAction
): TSettingsState => {
  switch (action.type) {
    case ESettingsActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, isSidebarActive: !state.isSidebarActive };
    }
    default: {
      return state;
    }
  }
};
