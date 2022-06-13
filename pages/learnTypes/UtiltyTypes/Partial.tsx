//各プロパティをオプショナルにするもの
type Person = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type PartialPerson = Partial<Person> //Readonlyメソッドを使用

const person: PartialPerson = {
  name: "しょうま", //partialにすることによってプロパティを全てオプショナルにすることができる
};
