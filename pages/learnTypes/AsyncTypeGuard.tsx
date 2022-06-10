
 //非同期処理でのUser Type Guard
type UserA = { name: "string"; lang: "japan" };
type UserB = { name: "string"; lang: "english" };

const isUserA = (user: UserA | UserB): user is UserA => {
  return user.lang === "japan";
};

const isUserB = (user: UserA | UserB): user is UserB => {
  return user.lang === "english";
};

export const foo = async () => {
  const res = await fetch("");
  const json = await res.json();
  if (isUserA(json)) {
    return json.lang;
  }
};


//filter関数でのUser Type Guard
// type UserA = { name: string; lang: "japan" };
// type UserB = { name: string; lang: "english" };

// const isUserA = (user: UserA | UserB): user is UserA => {
//   return user.lang === "japan";
// };

// const isUserB = (user: UserA | UserB): user is UserB => {
//   return user.lang === "english";
// };

// const users: (UserA | UserB)[] = [
//   { name: "たなか", lang: "japan" },
//   { name: "ヤマダ", lang: "japan" },
//   { name: "ジョニー", lang: "english" },
// ];

// const japanese = users.filter(isUserA);