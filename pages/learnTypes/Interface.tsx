export const Interface = () => {
  //interfaceの継承
  interface Foo {
    a: number;
  }
  interface Bar extends Foo {
    // type Bar = Foo& {  上の記述はtypeで書く時はこう書く
    b: number;
  }

  const foo: Bar = {
    a: 1,
    b: 2,
  };

  //typeのmapped types
  type Animals = "dog" | "cat";

  type Hoo = {
    [key in Animals]: number;
  };
  const hoo: Hoo = {
    dog: 1,
    cat: 2,
  };
  return;
};
