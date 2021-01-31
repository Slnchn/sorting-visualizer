import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsSidebarActive } from 'store/selectors/settings.selectors';
import { selectSortingTickInterval } from 'store/selectors/app.selectors';
import { setSortingTickInterval } from 'store/action-creators/app.action-creators';

import { SORTING_INTERVAL_TICK_MAX, SORTING_INTERVAL_TICK_MIN } from 'constants/app.constants';

import ResetArrayBtn from './sidebar-controls/ResetArrayBtn';

function Sidebar() {
  const dispatch = useDispatch();

  const isSidebarActive = useSelector(selectIsSidebarActive);
  const sortingTickInterval = useSelector(selectSortingTickInterval);

  function changeSortingIntervalTick(event) {
    const {
      target: { value },
    } = event;

    dispatch(setSortingTickInterval(value));
  }

  return (
    <section className={`sidebar${isSidebarActive ? '--active' : ''}`}>
      <h2 className="sidebar__title">Sorting settings</h2>

      <label htmlFor="sorting-tick-interval-control">
        Sorting tick interval:
        <input
          type="range"
          name="sorting-tick-interval-control"
          id="sorting-tick-interval-control"
          value={sortingTickInterval}
          min={SORTING_INTERVAL_TICK_MIN}
          max={SORTING_INTERVAL_TICK_MAX}
          onChange={changeSortingIntervalTick}
        />
      </label>

      <ResetArrayBtn />
    </section>
  );
}

export default Sidebar;
