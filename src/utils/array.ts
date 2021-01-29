import { v4 as uuid } from 'uuid';

import { ISortNumber } from 'models/ISortNumber';

import { between } from './index';

export function createRandomArray(size: number): ISortNumber[] {
  return new Array(size).fill(0).map(() => ({
    id: uuid(),
    number: between(0, size),
  }));
}
