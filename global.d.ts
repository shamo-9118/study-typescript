declare var x: number;
//.d.tsのファイル内のものは暗黙的にdeclareで書かれていて、自動でexportされている
//ただ最近は.d.tsファイルでもdeclareを明示的に記述することが多いらしい
declare namespace NodeJS { //ここではWindowオブジェクトの直下にあるNodeJSのNameSpaceを指定している
  interface ProcessEnv { //interfaceだからマージされる。
    FOO: string;
  }
}

// export{}
//環境変数の型を拡張している。
//環境変数はどんどん増えることがとても多い
//環境変数は予測変換で出して欲しいので型をつけたい。

//このファイルはモジュールではないexportやimportが存在しないため。
//モジュールでないアンビエントコンテキストでの宣言は基本的にはWindowsオブジェクト直下に対して定義することになる

//独立したexportが同じモジュール内にある場合の対処方法
declare global{ //declare globalとすることでNodeJSの上位であるWindowに直接指定している
  declare namespace NodeJS {
    interface ProcessEnv{
      TOO:string
    }
  }
}