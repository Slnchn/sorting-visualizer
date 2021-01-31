import { ISortNumber } from 'models/ISortNumber';

export function* bubbleSort(array: ISortNumber[]): Generator<ISortNumber[]> {
  let sorted = false;
  const arrayCopy = [...array];

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arrayCopy.length - 1; i += 1) {
      if (arrayCopy[i].number < arrayCopy[i + 1].number) {
        [arrayCopy[i], arrayCopy[i + 1]] = [arrayCopy[i + 1], arrayCopy[i]];
        sorted = false;
      }
    }

    yield arrayCopy;
  }

  return arrayCopy;
}
