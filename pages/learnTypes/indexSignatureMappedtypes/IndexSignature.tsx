export type User = {
  name: string;
  [key: string]:string | number;  //index signature keyはなんでもいい、自身で設定
  //union typesにすれば対応はできるが、少し面倒で柔軟性に欠ける。
};

//オブジェクトの中にプロパティが追加されていく場合に使用されるのがindex signatureです
const user: User = {
  name: "将真",
  age :20,
  account: "shoma_maru",
  job:"software engineer" //どんどんプロパティを追加できる。
};
//index signatureは多用しないのが吉