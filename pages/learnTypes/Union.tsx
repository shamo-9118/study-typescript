export const Union = () => {
  type Foo = {
    a: number;
    b: string;
  };
  type Bar = {
    a: string;
    c: boolean;
  };
  type FooBar = Foo | Bar;

  const test: FooBar = {
    a:"",
    b: "",
    c: true,
  };

  if("b" in test) { //in演算子で絞り込むことができる
    test.a.toFixed()
  }else{
    test.c
  }
  return;
};
