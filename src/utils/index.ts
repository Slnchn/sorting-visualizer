export function generateNumberInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getMaxNumber(arr: number[]) {
  return arr.reduce((max, item) => (item > max ? item : max), arr[0]);
}
