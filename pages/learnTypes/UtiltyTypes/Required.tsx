//全てのプロパティを必須にするメソッド
type Man = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type RequiredMan = Required<Man>; //requiredメソッドを使用

const man: RequiredMan = {
  name: "しょうま",
  age: 25,
  country: "JP", //上記ではcountryはオプショナルになっているけど、requiredを使うことで必須になっている。
};
