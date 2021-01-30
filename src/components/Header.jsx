import React from 'react';

import SidebarButton from './SidebarButton';

function Header() {
  return (
    <header className="header">
      <SidebarButton />
      <h1 className="header__title">Sorting Visualizer</h1>
    </header>
  );
}

export default Header;
