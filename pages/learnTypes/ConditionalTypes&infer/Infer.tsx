//inferは部分的な型抽出に使われていて、ConditionalTypesとよく併用される。

//↓↓関数の返り値の型のみを取得したい場合
const joo = () => {
  return 1;
};

type Return<T> = T extends () => infer U ? U : never; //inferは関数だけに使える
type Poo = Return<typeof joo>;

//↓↓関数の引数の方のみを取得した場合
const Yoo = (id: string, age: number) => {
  return 2;
};
type props<T> = T extends (...args: infer U) => number ? U : never; //可変長引数  複数の引数の型を受け取れる
// type props<T> = T extends (...args:[ infer U, ...any ]) => number ? U : never; 第一引数のみ
// type props<T> = T extends (...args:[any, infer U, ...any[] ]) => number ? U : never; 第二引数のみ

type Roo = props<typeof Yoo>;

//関数の返り値だけが欲しい時にConditionalTypesとInferが使われる。
//なかなかここまでの知識は求められない