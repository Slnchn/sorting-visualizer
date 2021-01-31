import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setArray,
  setArraySortingCompleted,
  setArraySortingInProgress,
  setInitialArray,
} from 'store/action-creators/app.action-creators';

import {
  selectArray,
  selectArraySize,
  selectInitialArray,
  selectSortingTickInterval,
} from 'store/selectors/app.selectors';

import { getMaxNumber } from 'utils';
import { bubbleSort } from 'utils/sortings';
import {
  calculateArrayItemHeight,
  calculateArrayItemWidth,
  createRandomArray,
  getArrayItemClassName,
} from 'utils/array';

function SortingVisualizer() {
  const arrayEl = useRef(null);

  const dispatch = useDispatch();

  const initialArray = useSelector(selectInitialArray);
  const array = useSelector(selectArray);
  const arraySize = useSelector(selectArraySize);
  const sortingTickInterval = useSelector(selectSortingTickInterval);

  const sortIterator = useMemo(() => bubbleSort(array), [initialArray]);
  const itemHeight = useMemo(() => calculateArrayItemHeight(arraySize), [arraySize]);

  useEffect(() => {
    dispatch(setInitialArray(createRandomArray(arraySize)));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextArray = sortIterator.next();
      if (!nextArray.done) {
        dispatch(setArray(nextArray.value));
      } else {
        dispatch(setArraySortingCompleted());
        clearInterval(intervalId);
      }
    }, sortingTickInterval);

    dispatch(setArraySortingInProgress());

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div className="sorting-visualizer">
      <ul className="array" ref={arrayEl}>
        {array.map((item) => (
          <li
            className={getArrayItemClassName(item)}
            style={{
              height: `${itemHeight}%`,
              width: `${calculateArrayItemWidth(
                item.number,
                getMaxNumber(array.map(({ number }) => number))
              )}%`,
            }}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default SortingVisualizer;
