const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const setProperty = <T, K extends keyof T>(obj: T, key: K, value: T[K]) => {
  obj[key] = value;
};

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};

const hoge = getProperty(obj, "baz");

setProperty(obj,"bar",100)

//lookupTypesの構文 以前に定義したtypeを参照する。
type Obj = {
  a: string;
  b: number;
};

type Foo = Obj["b"];
