import { v4 as uuid } from 'uuid';

import { ISortNumber } from 'models/ISortNumber';

import { ONE_HUNDRED_PERCENTS } from 'constants/global.constants';

import { generateNumberInRange } from './index';

export function createRandomArray(size: number): ISortNumber[] {
  return new Array(size).fill(0).map(() => ({
    id: uuid(),
    number: generateNumberInRange(0, size),
  }));
}

export function calculateArrayItemHeight(arraySize: number) {
  return ONE_HUNDRED_PERCENTS / (1.4 * arraySize);
}

export function calculateArrayItemWidth(arrayItem: number, maxArrayItem: number) {
  return Math.floor(ONE_HUNDRED_PERCENTS * (arrayItem / maxArrayItem));
}
