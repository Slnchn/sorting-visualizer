import { ISortNumber } from 'models/ISortNumber';

import { resetArrayItemsParams } from './array';

export function* stubSorting(array: ISortNumber[]): Generator<ISortNumber[]> {
  for (let i = 0; i < array.length; i += 1) {
    yield array;
  }

  return array;
}

export function* bubbleSorting(array: ISortNumber[]): Generator<ISortNumber[]> {
  let sorted = false;
  let arrayCopy = [...array];

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arrayCopy.length - 1; i += 1) {
      arrayCopy = resetArrayItemsParams(arrayCopy);

      arrayCopy[i].isComparing = true;
      arrayCopy[i + 1].isComparing = true;

      yield arrayCopy;

      if (arrayCopy[i].number < arrayCopy[i + 1].number) {
        [arrayCopy[i], arrayCopy[i + 1]] = [arrayCopy[i + 1], arrayCopy[i]];
        sorted = false;

        arrayCopy[i].isComparing = false;
        arrayCopy[i + 1].isComparing = false;
        arrayCopy[i].isSwapping = true;
        arrayCopy[i + 1].isSwapping = true;

        yield arrayCopy;
      }
    }
  }

  return arrayCopy;
}
