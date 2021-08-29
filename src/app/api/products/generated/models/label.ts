/* tslint:disable */
type Label = 'Hard to find' | 'New';
module Label {
  export const HARD_TO_FIND: Label = 'Hard to find';
  export const NEW: Label = 'New';
  export function values(): Label[] {
    return [HARD_TO_FIND, NEW];
  }
}

export { Label };
