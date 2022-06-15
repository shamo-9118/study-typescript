function vee(a:string){
  return;
}
type Vee = Parameters<typeof vee>
//Parametersは関数の引数の型をtypeofを使って取得するメソッド
//引数の方が複数あったとしても取得は可能