export const settingsInitState = {
  isSidebarActive: false,
};

const f = () => settingsInitState;
export type TSettingsState = ReturnType<typeof f>;
