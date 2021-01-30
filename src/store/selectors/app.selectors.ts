import { ISortNumber } from 'models/ISortNumber';

import { TStore } from '../index';

export const selectArray = (store: TStore): ISortNumber[] => store.appState.array;

export const selectArraySize = (store: TStore): number => store.appState.arraySize;

export const selectSortingTickInterval = (store: TStore): number =>
  store.appState.sortingTickInterval;
