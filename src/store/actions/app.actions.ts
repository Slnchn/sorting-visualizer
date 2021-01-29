import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';

export interface ISetArray {
  type: EActionTypes.SET_ARRAY;
  array: ISortNumber[];
}

export type TAppAction = ISetArray;
