import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setArraySortingCompleted,
  setArraySortingInProgress,
} from 'store/action-creators/app.action-creators';
import { selectIsSortingInProgress } from 'store/selectors/app.selectors';

function StartSortingButton() {
  const dispatch = useDispatch();

  const isSortingInProgress = useSelector(selectIsSortingInProgress);

  function startSorting() {
    dispatch(setArraySortingInProgress());
  }

  function stopSorting() {
    dispatch(setArraySortingCompleted());
  }

  if (isSortingInProgress) {
    return (
      <button type="button" onClick={stopSorting}>
        Stop Sorting
      </button>
    );
  }

  return (
    <button type="button" onClick={startSorting}>
      Start Sorting
    </button>
  );
}

export default StartSortingButton;
