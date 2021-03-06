import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectSortingTickInterval } from 'store/selectors/app.selectors';
import { setSortingTickInterval } from 'store/action-creators/app.action-creators';

import { SORTING_INTERVAL_TICK_MAX, SORTING_INTERVAL_TICK_MIN } from 'constants/app.constants';

function SortingIntervalTickPicker() {
  const dispatch = useDispatch();

  const sortingTickInterval = useSelector(selectSortingTickInterval);

  function changeSortingIntervalTick(event) {
    const {
      target: { value },
    } = event;

    dispatch(setSortingTickInterval(value));
  }

  return (
    <label className="sorting-interval-tick-picker" htmlFor="sorting-tick-interval-control">
      <span className="sorting-interval-tick-picker__title">Sorting tick interval:</span>
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
  );
}

export default SortingIntervalTickPicker;
