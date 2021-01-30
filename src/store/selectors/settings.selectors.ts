import { TStore } from 'store';

export const selectIsSidebarActive = (store: TStore): boolean =>
  store.settingsState.isSidebarActive;
