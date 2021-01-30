import ESettingsActionTypes from 'store/action-types/settings.action-types';

export interface IToggleSidebar {
  type: ESettingsActionTypes.TOGGLE_SIDEBAR;
}

export type TSettingsAction = IToggleSidebar;
