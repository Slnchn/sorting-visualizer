import { ISortNumber } from 'models/ISortNumber';

import EActionTypes from '../action-types/app.action-types';
import { ISetArray } from '../actions/app.actions';

export const setArray = (array: ISortNumber[]): ISetArray => ({
  type: EActionTypes.SET_ARRAY,
  array,
});
