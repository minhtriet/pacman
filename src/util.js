const intersperse = function* (a, delim) {
  let first = true;
  for (const x of a) {
    if (!first) {
      for (const d of delim) {
        yield d;
      }
    }
    first = false;
    yield x;
  }
}

export const WALL = 0;
export const BISCUIT = 1;
export const EMPTY = 2;
export const BLOCK = 3;
export const PILL = 4;
export const PLAYER = 5;
export const INVULNERABLE_GHOST = 6;
export const VULNERABLE_GHOST = 7;
export { intersperse } 