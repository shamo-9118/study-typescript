
type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};
type ReadonlyUser = Readonly<User> //Readonlyメソッドを使用

const user: ReadonlyUser = {
  name: "しょうま",
  age: 25,
};

// user.age = 30; Readonlyを使うと読み取りしかできなくなり、書き換えが効かなくなる
