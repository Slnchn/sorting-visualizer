import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';

export interface ISetInitialArray {
  type: EActionTypes.SET_INITIAL_ARRAY;
  initialArray: ISortNumber[];
}

export interface ISetArray {
  type: EActionTypes.SET_ARRAY;
  array: ISortNumber[];
}

export interface ISetSortingTickInterval {
  type: EActionTypes.SET_SORTING_TICK_INTERVAL;
  sortingTickInterval: number;
}

export interface ISetArraySortingInProgress {
  type: EActionTypes.SET_ARRAY_SORTING_IN_PROGRESS;
}

export interface ISetArraySortingCompleted {
  type: EActionTypes.SET_ARRAY_SORTING_COMPLETED;
}

export type TAppAction =
  | ISetInitialArray
  | ISetArray
  | ISetSortingTickInterval
  | ISetArraySortingInProgress
  | ISetArraySortingCompleted;
