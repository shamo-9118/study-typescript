//ユーザー定義のTypeGuard
type UserA = { name: "string"; lang: "japan" };
type UserB = { name: "string"; lang: "english" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "japan";
};

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "english";
};

export const foo = (value: any) => {
  if (isUserA(value)) {
    return value;
  }
  if (isUserB(value)) {
    return value;
  }
  return value;
};

//非同期処理  非同期処理で取得したデータは基本的には型がついていない。そのため、ユーザー定義のType Guardを使って定義することが頻繁にある
type HumanA = { name: "string"; lang: "japan" };
type HumanB = { name: "string"; lang: "english" };

const isHuman = (human: HumanA | HumanB): human is HumanA => {
  return human.lang === "japan";
};





//filter JavaScriptのfilter関数はtypescriptでは抑えきれていないからユーザー定義で対応する必要がある。
