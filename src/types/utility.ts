export type Promisable<T> = Promise<T> | T;

export type WrapArray<T> = T extends undefined
  ? []
  : T extends unknown[]
  ? number extends T["length"]
    ? [T]
    : T
  : [T];
