//Genericsを理解する
export type Foo<T> = {
  value: T;
};

const foo1: Foo<string> = {
  value: "今日は",
};
const foo2: Foo<number[]> = {
  value: [1, 2, 3],
};
const foo3: Foo<boolean> = {
  value: true,
};

//Use Case
type User<T> = {
  //T = Typeの略称になっている K = Keyも用いられる
  name: string;
  state: T;
};

type Japanese = User<"東京" | "広島">;
type American = User<"CA" | "NY">; //Genericsで遅延させた型定義をここでする

const user1: Japanese = {
  name: "マルモと",
  state: "広島",
};
const user2: American = {
  name: "marumot",
  state: "CA",
};

//genericsにおける初期値の設定
type Bar<T = string> = {
  //genericsの初期値を設定することができるようになる。
  value: T;
};

const bar: Bar = {
  //初期値が設定されている
  value: "",
};

//Genericsの型引数に制約を加えたい時にextendsを用いる。
type Hoo<T extends string> = {
  //UnionTypesを使って複数の型を予定することも可能f
  value: T;
};

const hoo: Hoo<"aaa"> = {
  //extendsを使うを互換性のある型を入れることができる。 LiteralTypesなど
  value: "aaa",
};

const goo: Hoo<string> = {
  //もちろん同レベルの型も用いることができる。
  value: "HELLO!",
};

//Genericsで extendsと初期値を合わせて使用する。
type Boo<T extends string | number = string> = { //genericsで型をのちに定義しながらも初期値を設定
  value: T;
};

const boo:Boo={ 
  value :"boo"
}

const joo:Boo<number> = {
  value:123,
}