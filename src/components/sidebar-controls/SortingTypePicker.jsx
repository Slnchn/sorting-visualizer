import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingType } from 'store/action-creators/app.action-creators';
import { selectCurrentSortingType } from 'store/selectors/app.selectors';

import { sortingsMap } from 'utils/sortings-map';

function SortingTypePicker() {
  const dispatch = useDispatch();

  const currentSortingType = useSelector(selectCurrentSortingType);

  function changeSortingType(event) {
    const { target: value } = event;

    dispatch(setSortingType(value));
  }

  return (
    <label htmlFor="sorting-type-picker">
      Sorting type picker:
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
