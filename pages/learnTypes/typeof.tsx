export const bar = "aaa";
const foo = "aaa";
type Foo = typeof foo;

//typeofのuse case
const obj1 = {
  //typeofはLiteralにはならない
  a: 111,
  b: 222,
};

const obj2: typeof obj1 = {
  a: 111,
  b: 222,
};

function double(x: number | string) { //絞り込みのtypeof
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}
