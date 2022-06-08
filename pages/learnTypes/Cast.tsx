export const color = "red";

const theme = {
  color: "red" as "red", //プリミティブ型で定義される。
  backgroundColor:" blue" as const
  //ダウンキャストするときはasの後にstring literal typesでかく as const でも良い( const assertion )
}as const //ここに書けば全体にダウンキャストをかけられる。自動でreadonlyも付与

// theme.color = "blue"; //JavaScriptの場合、constでオブジェクトを定義したときにオブジェクトのプロパティというのは変更可能になっている。
//定数ファイルを作るときは定数ファイルは付けておく方が良い。

//アップキャストはあまり使うべきではない。
//型を自分の力だけでは解決できないときにはアップキャストを使う。

//non-null assertionとDouble assertionはあまり使うべ気ではない。


//non-null assertion
// function getFirstLetter (str?: string){
// 	return str!.charAt(0);
// }
function getFirstLetter (str?: string){
	if(!str){      //ここでしっかりとundefinedの可能性を消す
	return
}
return str.charAt(0)
}

//Double assertion
function getFirst(str: number){
  return (str as unknown as string ).charAt(0);
}