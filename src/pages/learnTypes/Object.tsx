export const Object = () => {
  // let obj1: {} = {};
  // let obj2: object = {};  あまり使わない
  let obj3: Record<string, Record<string, unknown>> = {
    a: {
      foo: 100,
    },
  };

  let obj4: { [key: string]: { foo: unknown } } = {  //こちらの方が圧倒的に見やすい
    a: {
      foo: 100,
    },
  };

  return;
};

//obj3 & obj4 を使用していくべき。理由はobj1とobj2はPrimitiv
