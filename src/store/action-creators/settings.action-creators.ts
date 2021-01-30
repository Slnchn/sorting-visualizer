import ESettingsActionTypes from '../action-types/settings.action-types';
import { IToggleSidebar } from '../actions/settings.actions';

export const toggleSidebar = (): IToggleSidebar => ({
  type: ESettingsActionTypes.TOGGLE_SIDEBAR,
});
