import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsSortingInProgress } from 'store/selectors/app.selectors';

import SidebarButton from './header-controls/SidebarButton';
import SortingButton from './header-controls/SortingButton';

function Header() {
  const isSortingInProgress = useSelector(selectIsSortingInProgress);

  return (
    <header className="header">
      <div className="header-title-wrapper">
        <SidebarButton />
        <h1 className={`header__title${isSortingInProgress ? '--blinking' : ''}`}>
          Sorting Visualizer
        </h1>
      </div>

      <SortingButton />
    </header>
  );
}

export default Header;
