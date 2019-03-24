/**
 * For [A, B, C, D] emits [[A, B], [B, C], [C, D]].
 * @param array Input array.
 */
export function* pairwise<T> (array: T[]) {
  for (let i = 0; i < array.length - 1; i++) {
    yield [array[i], array[i + 1]]
  }
}

/**
 * For [A, B, C, D] emits [[A, B], [B, C], [C, D], [D, A]].
 * @param array Input array.
 */
export function* pairwiseCircular<T> (array: T[]) {
  for (let i = 0; i < array.length - 1; i++) {
    yield [array[i], array[i + 1]]
  }
  yield [array[array.length - 1], array[0]]
}
