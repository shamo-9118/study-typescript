//アンビエント宣言とは -> declare
//方の情報だけを書くもので実装は含めない。しかし書こうと思えばかけてしまう。なぜかは不明

//declareの簡単な構文
declare var x: number;
x = 3;

declare namespace MySpace { //declareを使ったnamespaceの中をアンビエントコンテキストといい
   type name = { //アンビエントコンテキストの中はexportの挙動が少し変わる
    name: string;//自動的にexportが付与されて記述する必要がなくなる。
  };
}
type name = MySpace.name //exportしなくても型がついている
//.d.tsの型定義ファイルは全部がアンビエント宣言になっている
