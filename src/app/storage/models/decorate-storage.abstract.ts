export abstract class DecorateStorage<
  T = { key: string; value: string | object },
  K = string | object | any
> {
  abstract setProperty(key: string, value: K): T;
  abstract getPropety(key: string): K;
}
