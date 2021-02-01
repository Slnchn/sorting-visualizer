import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setArraySortingCompleted,
  setArraySortingInProgress,
} from 'store/action-creators/app.action-creators';
import { selectIsSortingInProgress } from 'store/selectors/app.selectors';

function SortingButton() {
  const dispatch = useDispatch();

  const isSortingInProgress = useSelector(selectIsSortingInProgress);

  function startSorting() {
    dispatch(setArraySortingInProgress());
  }

  function stopSorting() {
    dispatch(setArraySortingCompleted());
  }

  return (
    <div className="sorting-button-wrapper">
      {isSortingInProgress ? (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className="sorting-button--pause" onClick={stopSorting} />
      ) : (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button type="button" className="sorting-button--start" onClick={startSorting} />
      )}
    </div>
  );
}

export default SortingButton;
