import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setArray } from 'store/action-creators/app.action-creators';
import { selectArray, selectArraySize } from 'store/selectors/app.selectors';

import { bubbleSort, createRandomArray } from 'utils/array';

function SortingVisualizer() {
  const dispatch = useDispatch();

  const array = useSelector(selectArray);
  const arraySize = useSelector(selectArraySize);

  const sortIterator = useMemo(() => bubbleSort(array), [array]);

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
    }, 250);

    return () => {
      clearInterval(intervalId);
    };
  }, [sortIterator]);

  return (
    <div className="sorting-visualizer">
      <ul className="array">
        {array.map((item) => (
          <li className="array__item" style={{ width: `${item.number}vw` }} key={item.id}>
            {item.number}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortingVisualizer;
