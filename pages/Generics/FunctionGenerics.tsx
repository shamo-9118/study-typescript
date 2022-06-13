//関数のGenericsについて
function foo<T>(arg: T) {
  return { value: arg };
}

const foo1 = foo<number>(1);
const foo2 = foo<number[]>([1, 2, 3]);
const foo3 = foo<boolean[]>([true, false]);
const foo4 = foo<{ foo: string[] }>({ foo: ["aaa", "sss", "ddd"] });
//arg = arguments (Array-like)の略称で関数の引数として用いられる

//extendsで型の制約をつける  ここは重要なポイント
const Foo = <T extends string | number>(arg: T) => {
  if (typeof arg === "string") {
    return { value: arg.toUpperCase() };
  }
  return { value: arg.toFixed() };
};

{
  const foo1 = Foo<string>("aaa");
}
{const foo2 = Foo<"aaa">("aaa")}