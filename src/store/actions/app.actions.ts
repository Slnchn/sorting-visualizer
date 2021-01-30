import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';

export interface ISetArray {
  type: EActionTypes.SET_ARRAY;
  array: ISortNumber[];
}

export interface ISetSortingTickInterval {
  type: EActionTypes.SET_SORTING_TICK_INTERVAL;
  sortingTickInterval: number;
}

export type TAppAction = ISetArray | ISetSortingTickInterval;
