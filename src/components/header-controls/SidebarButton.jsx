import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsSidebarActive } from 'store/selectors/settings.selectors';
import { toggleSidebar } from 'store/action-creators/settings.action-creators';

function SidebarButton() {
  const dispatch = useDispatch();

  const isSidebarActive = useSelector(selectIsSidebarActive);

  function onSidebarButtonClick() {
    dispatch(toggleSidebar());
  }

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      type="button"
      title="Toggle menu"
      className={`sidebar-button${isSidebarActive ? '--active' : ''}`}
      onClick={onSidebarButtonClick}
    />
  );
}

export default SidebarButton;
