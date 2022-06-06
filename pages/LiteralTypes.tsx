export const LiteralTypes =()=>{
  const goo: "goo" = "goo"
  const number:3 = 3;
  const boolean:true = true  //より具体性を増して定義できるのがLiteral Typesの特徴

  const bar = "bar" //JSにおけるconstは暗黙的にLiteral Types
  let foo = bar;    //JSにおけるletは暗黙的にPrimitive Types

  return;
}
//constで定義したものがletで定義したものに入れられることによってWideningが起きてしまっている。
