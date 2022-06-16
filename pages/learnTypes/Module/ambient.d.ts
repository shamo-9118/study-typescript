//declare moduleの基本的な構文
declare module "Moo" {
  //独立したexportがないからModule拡張
  const bar: number;
}
//module宣言でもmodule拡張とAmbientModuleの二つのどちらかになる
//条件としては、独立したexportがない場合にはAmbientModule
//独立したexportがある場合はになるmodule拡張
//型拡張 => 既存の型に対して型を追加する
//AmbientModule => 既存の型を上書きする
declare module "*.mp3" {
  const data: string;
  export default data;
}
