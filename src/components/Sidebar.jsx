import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsSidebarActive } from 'store/selectors/settings.selectors';

import ResetArrayButton from './sidebar-controls/ResetArrayButton';
import SortingTypePicker from './sidebar-controls/SortingTypePicker';
import SortingIntervalTickPicker from './sidebar-controls/SortingIntervalTickPicker';

function Sidebar() {
  const isSidebarActive = useSelector(selectIsSidebarActive);

  return (
    <section className={`sidebar${isSidebarActive ? '--active' : ''}`}>
      <h2 className="sidebar__title">Settings</h2>

      <SortingIntervalTickPicker />

      <SortingTypePicker />

      <ResetArrayButton />
    </section>
  );
}

export default Sidebar;
