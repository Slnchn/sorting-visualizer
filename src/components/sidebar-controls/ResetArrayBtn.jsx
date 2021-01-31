import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInitialArray } from 'store/action-creators/app.action-creators';
import { selectArraySize } from 'store/selectors/app.selectors';

import { createRandomArray } from 'utils/array';

function ResetArrayBtn() {
  const dispatch = useDispatch();

  const arraySize = useSelector(selectArraySize);

  function resetArray() {
    dispatch(setInitialArray(createRandomArray(arraySize)));
  }

  return (
    <button type="button" onClick={resetArray}>
      Reset array
    </button>
  );
}

export default ResetArrayBtn;
