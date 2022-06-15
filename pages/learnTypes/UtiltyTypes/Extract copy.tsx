type loo = Exclude<string | number , string>
//Excludeはメソッドは第一引数の中から第二引数と互換性のないものを返すメソッド。
//第一引数と第二引数はUnionTypesでも大丈夫
//第一引数はLiteralTypesでもいい
//何も互換性のあるものしかないとneverが返される
//Extractとは真逆の挙動をする、