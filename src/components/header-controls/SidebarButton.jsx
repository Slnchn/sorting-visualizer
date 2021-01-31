import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GiHamburgerMenu } from 'react-icons/gi';
import { selectIsSidebarActive } from 'store/selectors/settings.selectors';
import { toggleSidebar } from 'store/action-creators/settings.action-creators';

function SidebarButton() {
  const dispatch = useDispatch();

  const isSidebarActive = useSelector(selectIsSidebarActive);

  function onSidebarButtonClick() {
    dispatch(toggleSidebar());
  }

  return (
    <button
      type="button"
      className={`sidebar-button${isSidebarActive ? '--active' : ''}`}
      onClick={onSidebarButtonClick}
    >
      {/* TODO: make icon adaptive */}
      <GiHamburgerMenu size={18} />
    </button>
  );
}

export default SidebarButton;
