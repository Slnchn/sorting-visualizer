import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setArray } from 'store/action-creators/app.action-creators';
import { getMaxNumber } from 'utils/';
import {
  selectArray,
  selectArraySize,
  selectSortingTickInterval,
} from 'store/selectors/app.selectors';

import {
  bubbleSort,
  calculateArrayItemHeight,
  calculateArrayItemWidth,
  createRandomArray,
} from 'utils/array';

function SortingVisualizer() {
  const arrayEl = useRef(null);

  const dispatch = useDispatch();

  const array = useSelector(selectArray);
  const arraySize = useSelector(selectArraySize);
  const sortingTickInterval = useSelector(selectSortingTickInterval);

  const sortIterator = useMemo(() => bubbleSort(array), [array]);
  const itemHeight = useMemo(() => calculateArrayItemHeight(arraySize), [arraySize]);

  useEffect(() => {
    dispatch(setArray(createRandomArray(arraySize)));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextArray = sortIterator.next();

      if (!nextArray.done) {
        dispatch(setArray(nextArray.value));
      } else {
        clearInterval(intervalId);
      }
    }, sortingTickInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [sortIterator]);

  return (
    <div className="sorting-visualizer">
      <ul className="array" ref={arrayEl}>
        {array.map((item) => (
          <li
            className="array__item"
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
