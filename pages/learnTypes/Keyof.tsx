export const Obj = {
  foo: "foo",
  bar: "bar",
};

// type Key = typeof Obj; //Union Typesとして取得している。 Key = foo | bar と同じ Literal TypesなおかつUnion Types


//keyofとtypeofをまとめて使う
type Key = keyof typeof Obj;


function test (x: keyof typeof Obj){
  return;
}