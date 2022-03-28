export interface DecorateStorage<T, K> {
  setProperty(key: string, value: K): T;
  getPropety(key: string): K;
}

export abstract class DecorateStorage<
  T = { key: string; value: string | object },
  K = string | object | any
> implements DecorateStorage<T, K> {}
