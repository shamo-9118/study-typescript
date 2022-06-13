//UtilityTypes == inferやConditionalTypesなどの面倒な処理をまとめたもの
const loo = () => {
  return "";
};

// type Back<T>= T extends ()=> infer U ? U :never ;   ここの処理が難しいし面倒臭い

type Loo = ReturnType<typeof loo>; //looの返り値の型を取得している。

//utiltytypesは他にもたくさんメソッドがある
//便利な型のライブラリが外部にはたくさんあるからそちらもしっかり使えるようになりたい。