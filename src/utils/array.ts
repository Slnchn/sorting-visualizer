import { v4 as uuid } from 'uuid';

import { ISortNumber } from 'models/ISortNumber';

import { generateNumberInRange } from './index';

export function createRandomArray(size: number): ISortNumber[] {
  return new Array(size).fill(0).map(() => ({
    id: uuid(),
    number: generateNumberInRange(0, size),
  }));
}

export function calculateArrayItemWidth(arrayItem: number, maxArrayItem: number) {
  return Math.floor(100 * (arrayItem / maxArrayItem));
}

export function* bubbleSort(array: ISortNumber[]): Generator<ISortNumber[]> {
  let shifted = true;
  const arrayCopy = [...array];

  while (shifted) {
    shifted = false;

    for (let i = 0; i < arrayCopy.length - 1; i += 1) {
      if (arrayCopy[i].number < arrayCopy[i + 1].number) {
        [arrayCopy[i], arrayCopy[i + 1]] = [arrayCopy[i + 1], arrayCopy[i]];
        shifted = true;
      }
    }

    if (!shifted) {
      return arrayCopy;
    }

    yield arrayCopy;
  }

  return arrayCopy;
}
