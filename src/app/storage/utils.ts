export const assert = function (
  condition: boolean,
  message: string
): Error | void {
  if (!condition) throw Error('Assert failed: ' + (message || ''));
};
