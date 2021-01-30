import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsSortingInProgress } from 'store/selectors/app.selectors';

import SidebarButton from './SidebarButton';

function Header() {
  const isSortingInProgress = useSelector(selectIsSortingInProgress);

  return (
    <header className="header">
      <SidebarButton />
      <h1 className={`header__title${isSortingInProgress ? '--blinking' : ''}`}>
        Sorting Visualizer
      </h1>
    </header>
  );
}

export default Header;
