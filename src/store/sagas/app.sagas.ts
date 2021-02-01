import { ISortNumber } from 'models/ISortNumber';
import { eventChannel, END } from 'redux-saga';
import { call, select, put, take, fork, cancel } from 'redux-saga/effects';
import {
  setArray,
  setArraySortingCompleted,
  setArraySortingInProgress,
} from 'store/action-creators/app.action-creators';
import EActionTypes from 'store/action-types/app.action-types';

import {
  selectCurrentSortingType,
  selectInitialArray,
  selectSortingTickInterval,
} from 'store/selectors/app.selectors';

import { getSorting } from 'utils/sortings-map';

// semi-helpers
function sortingTick(sortingIterator: Iterator<ISortNumber[]>, sortingTickInterval: number) {
  return eventChannel((emitter) => {
    const intervalId = setInterval(() => {
      const nextArray = sortingIterator.next();
      if (!nextArray.done) {
        emitter(nextArray.value);
      } else {
        emitter(END);
      }
    }, sortingTickInterval);

    return () => {
      clearInterval(intervalId);
    };
  });
}

// workers
function* sortingWorker() {
  const arrayToSort = yield select(selectInitialArray);
  const sortingTickInterval = yield select(selectSortingTickInterval);
  const currentSortingType = yield select(selectCurrentSortingType);

  const sortingGenerator = getSorting(currentSortingType);
  const sortingIterator = sortingGenerator(arrayToSort);

  const sortingTickIterator = yield call(sortingTick, sortingIterator, sortingTickInterval);

  try {
    while (true) {
      const nextArray = yield take(sortingTickIterator);
      yield put(setArray(nextArray));
    }
  } finally {
    yield put(setArraySortingCompleted());
  }
}

// watchers

export function* watchSorting() {
  while (yield take(EActionTypes.SET_ARRAY_SORTING_IN_PROGRESS)) {
    let sortingTask = yield fork(sortingWorker);

    const watchingActions = [
      EActionTypes.SET_ARRAY_SORTING_COMPLETED,
      EActionTypes.SET_SORTING_TICK_INTERVAL,
      EActionTypes.SET_INITIAL_ARRAY,
    ];

    for (let action = yield take(watchingActions); action; action = yield take(watchingActions)) {
      if (action.type === EActionTypes.SET_ARRAY_SORTING_COMPLETED) {
        yield cancel(sortingTask);
        break;
      } else if (
        action.type === EActionTypes.SET_SORTING_TICK_INTERVAL ||
        action.type === EActionTypes.SET_INITIAL_ARRAY
      ) {
        yield cancel(sortingTask);
        yield put(setArraySortingInProgress());
        sortingTask = yield fork(sortingWorker);
      }
    }
  }
}
