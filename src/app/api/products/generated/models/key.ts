/* tslint:disable */
type Key = 'hardToFind' | 'new';
module Key {
  export const HARD_TO_FIND: Key = 'hardToFind';
  export const NEW: Key = 'new';
  export function values(): Key[] {
    return [HARD_TO_FIND, NEW];
  }
}

export { Key };
