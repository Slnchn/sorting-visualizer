import {
  DEFAULT_ARRAY_SIZE,
  SORTING_INTERVAL_TICK_MAX,
  SORTING_INTERVAL_TICK_MIN,
} from 'constants/app.constants';

import { calculateAverage } from 'utils';

import { IAppState } from './app.state-type';

export const appInitState: IAppState = {
  initialArray: [],
  array: [],
  arraySize: DEFAULT_ARRAY_SIZE,
  sortingTickInterval: calculateAverage(SORTING_INTERVAL_TICK_MAX + SORTING_INTERVAL_TICK_MIN),
  sortingInProgress: false,
};
