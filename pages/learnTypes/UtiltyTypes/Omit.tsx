//Omit == いらないプロパティを指定して削除する。partialとは逆になる
type MyData = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type OmitPerson = Omit<MyData, "age"> //Readonlyメソッドを使用

const mydata: OmitPerson = {
  name: "しょうま", //partialにすることによってプロパティを全てオプショナルにすることができる
  // age:11,エラーが出る
  country:"JP",
};
