import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';
import { ISetArray, ISetSortingTickInterval } from '../actions/app.actions';

export const setArray = (array: ISortNumber[]): ISetArray => ({
  type: EActionTypes.SET_ARRAY,
  array,
});

export const setSortingTickInterval = (sortingTickInterval: number): ISetSortingTickInterval => ({
  type: EActionTypes.SET_SORTING_TICK_INTERVAL,
  sortingTickInterval,
});
