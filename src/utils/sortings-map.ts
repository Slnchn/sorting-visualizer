import { ESortingTypes } from 'models/ESortingTypes';
import { v4 as uuid } from 'uuid';

import { bubbleSorting, stubSorting } from './sortings';

export const sortingsMap = {
  [ESortingTypes.BUBBLE_SORT]: {
    id: uuid(),
    sortingFunction: bubbleSorting,
    sortingName: 'Bubble Sorting',
  },
};

export function getSorting(sortingType: ESortingTypes) {
  return sortingsMap[sortingType] ? sortingsMap[sortingType].sortingFunction : stubSorting;
}
