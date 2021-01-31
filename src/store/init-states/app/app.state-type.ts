import { ISortNumber } from 'models/ISortNumber';

export interface IAppState {
  initialArray: ISortNumber[];
  array: ISortNumber[];
  arraySize: number;
  sortingTickInterval: number;
  sortingInProgress: boolean;
}
