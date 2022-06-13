//このタイプの中からstringだけのものを抜き出したい。つまり、任意のキーを持ったプロパティだけを抜き出したい
type Props = {
  id: string;
  name: string;
  age: number;
};
type FilterString<T, U> = {
  //genericsの第二引数で指定すると任意のプロパティの抜き出しの柔軟性がます
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T]; //ここを消してStringKeysをみるとわかりやすい

type StringKeys = FilterString<Props, string>;
type NumberKeys = FilterString<Props, number>;
type BooleanKeys = FilterString<Props, boolean>; //存在しないものはneverが返ってくる

//ConditionalTypesとは、型の条件分岐をおこなって型の推論を行うもの
//infer -> ConditionalTypesと併用してよく使われる。部分的な型抽出
