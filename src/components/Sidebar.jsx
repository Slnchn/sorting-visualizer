import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsSidebarActive } from 'store/selectors/settings.selectors';

import ResetArrayBtn from './sidebar-controls/ResetArrayBtn';
import SortingIntervalTickInput from './sidebar-controls/SortingIntervalTickInput';

function Sidebar() {
  const isSidebarActive = useSelector(selectIsSidebarActive);

  return (
    <section className={`sidebar${isSidebarActive ? '--active' : ''}`}>
      <h2 className="sidebar__title">Sorting settings</h2>

      <SortingIntervalTickInput />

      <ResetArrayBtn />
    </section>
  );
}

export default Sidebar;
