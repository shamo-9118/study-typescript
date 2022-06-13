//Pickは指定した型からプロパティを選び出すメソッド
type Human = {
  name: string;
  age: number;
  country: "US" | "UK" | "JP";
};

type PickHuman = Pick<Human, "name" | "country">;

const human: PickHuman = {
  name: "しょうま",
  // age:24;  ageを入れるとエラーが出る。ちゃんと弾けてるのがわかる
  country: "JP",
};

