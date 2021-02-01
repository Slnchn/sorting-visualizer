import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setInitialArray } from 'store/action-creators/app.action-creators';
import { selectArray, selectArraySize } from 'store/selectors/app.selectors';

import { getMaxNumber } from 'utils';
import {
  calculateArrayItemHeight,
  calculateArrayItemWidth,
  createRandomArray,
  getArrayItemClassName,
} from 'utils/array';

function SortingVisualizer() {
  const arrayEl = useRef(null);

  const dispatch = useDispatch();

  const array = useSelector(selectArray);
  const arraySize = useSelector(selectArraySize);

  const itemHeight = useMemo(() => calculateArrayItemHeight(arraySize), [arraySize]);

  useEffect(() => {
    dispatch(setInitialArray(createRandomArray(arraySize)));
  }, []);

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
