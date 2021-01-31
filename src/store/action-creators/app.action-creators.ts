import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';
import {
  ISetArray,
  ISetArraySortingCompleted,
  ISetArraySortingInProgress,
  ISetInitialArray,
  ISetSortingTickInterval,
} from '../actions/app.actions';

export const setInitialArray = (initialArray: ISortNumber[]): ISetInitialArray => ({
  type: EActionTypes.SET_INITIAL_ARRAY,
  initialArray,
});

export const setArray = (array: ISortNumber[]): ISetArray => ({
  type: EActionTypes.SET_ARRAY,
  array,
});

export const setSortingTickInterval = (sortingTickInterval: number): ISetSortingTickInterval => ({
  type: EActionTypes.SET_SORTING_TICK_INTERVAL,
  sortingTickInterval,
});

export const setArraySortingInProgress = (): ISetArraySortingInProgress => ({
  type: EActionTypes.SET_ARRAY_SORTING_IN_PROGRESS,
});

export const setArraySortingCompleted = (): ISetArraySortingCompleted => ({
  type: EActionTypes.SET_ARRAY_SORTING_COMPLETED,
});
