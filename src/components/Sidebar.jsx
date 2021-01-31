import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsSidebarActive } from 'store/selectors/settings.selectors';

import ResetArrayBtn from './sidebar-controls/ResetArrayBtn';
import SortingTypePicker from './sidebar-controls/SortingTypePicker';
import SortingIntervalTickPicker from './sidebar-controls/SortingIntervalTickPicker';

function Sidebar() {
  const isSidebarActive = useSelector(selectIsSidebarActive);

  return (
    <section className={`sidebar${isSidebarActive ? '--active' : ''}`}>
      <h2 className="sidebar__title">Sorting settings</h2>

      <SortingIntervalTickPicker />

      <SortingTypePicker />

      <ResetArrayBtn />
    </section>
  );
}

export default Sidebar;
