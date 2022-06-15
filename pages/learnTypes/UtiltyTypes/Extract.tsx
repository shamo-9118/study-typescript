type roo = Extract<string | number , string>
//Extractメソッドは第一引数の中から第二引数と互換性のあるものを返すメソッド。
//第一引数はLiteralTypesでもいい
//何も互換性のないものだとneverが返される
//Pickとは区別して覚える