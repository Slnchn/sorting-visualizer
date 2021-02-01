import { v4 as uuid } from 'uuid';

import { ISortNumber } from 'models/ISortNumber';

import { ONE_HUNDRED_PERCENTS } from 'constants/global.constants';

import { generateNumberInRange } from './index';

export function createRandomArray(size: number): ISortNumber[] {
  return new Array(size).fill(0).map(() => ({
    id: uuid(),
    number: generateNumberInRange(1, size),
    isComparing: false,
    isSwapping: false,
  }));
}

export function resetArrayItemsParams(array: ISortNumber[]): ISortNumber[] {
  return array.map((item) => ({
    ...item,
    isComparing: false,
    isSwapping: false,
  }));
}

export function getArrayItemClassName(arrayItem: ISortNumber): string {
  const ARRAY_ITEM_CLASS_NAME = 'array__item';

  switch (true) {
    case arrayItem.isComparing: {
      return `${ARRAY_ITEM_CLASS_NAME}--comparing`;
    }
    case arrayItem.isSwapping: {
      return `${ARRAY_ITEM_CLASS_NAME}--swapping`;
    }
    default: {
      return ARRAY_ITEM_CLASS_NAME;
    }
  }
}

export function calculateArrayItemHeight(arraySize: number) {
  return ONE_HUNDRED_PERCENTS / (1.4 * arraySize);
}

export function calculateArrayItemWidth(arrayItem: number, maxArrayItem: number) {
  return Math.floor(ONE_HUNDRED_PERCENTS * (arrayItem / maxArrayItem));
}
