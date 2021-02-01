import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingType } from 'store/action-creators/app.action-creators';
import { selectCurrentSortingType } from 'store/selectors/app.selectors';

import { sortingsMap } from 'utils/sortings-map';

function SortingTypePicker() {
  const dispatch = useDispatch();

  const currentSortingType = useSelector(selectCurrentSortingType);

  function changeSortingType(event) {
    const {
      target: { value },
    } = event;

    dispatch(setSortingType(value));
  }

  return (
    <label className="sorting-type-picker" htmlFor="sorting-type-picker">
      <span className="sorting-type-picker__title">Sorting type picker:</span>
      <select
        name="sorting-type-picker"
        id="sorting-type-picker"
        value={currentSortingType}
        onChange={changeSortingType}
      >
        {Object.entries(sortingsMap).map(([sortingType, sortingConfig]) => (
          <option key={sortingConfig.id} value={sortingType}>
            {sortingConfig.sortingName}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SortingTypePicker;
