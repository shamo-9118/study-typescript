// Recordはオブジェクトを作るときの型定義によく用いられるもので
// オブジェクトのKeyとプロパティの型を定義する

type Quu = Record<string, number>; //第一引数にkey  第二引数にプロパティの型を指定する。
//LiteralTypesの指定も可能

const quu = {
  goo: 1,
  bar: 2,
};
