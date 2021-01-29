import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setArray } from 'store/action-creators/app.action-creators';
import { selectArray, selectArraySize } from 'store/selectors/app.selectors';

import { createRandomArray } from 'utils/array';

function SortingVisualizer() {
  const dispatch = useDispatch();

  const array = useSelector(selectArray);
  const arraySize = useSelector(selectArraySize);

  useEffect(() => {
    dispatch(setArray(createRandomArray(arraySize)));
  }, []);

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
