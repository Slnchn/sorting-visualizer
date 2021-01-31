import { ESortingTypes } from 'constants/app.constants';
import { ISortNumber } from 'models/ISortNumber';

export interface IAppState {
  initialArray: ISortNumber[];
  array: ISortNumber[];
  arraySize: number;
  sortingTickInterval: number;
  sortingInProgress: boolean;
  currentSortingType: ESortingTypes;
}
