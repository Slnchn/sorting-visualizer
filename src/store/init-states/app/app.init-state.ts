import { SORTING_INTERVAL_TICK_MAX } from 'constants/app.constants';

import { IAppState } from './app.state-type';

export const appInitState: IAppState = {
  array: [],
  arraySize: 50,
  sortingTickInterval: SORTING_INTERVAL_TICK_MAX,
  sortingInProgress: false,
};
