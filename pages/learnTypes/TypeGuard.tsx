//typeofを使ったtype guard
export const foo = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value;
  }
  return value;
};

//JSのメソッドや演算子を使ったType Guard
export const bar = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value;
  }
  return value;
};

//演算子を使ったType Guard
export const goo = (value?: string) => {
  if (!value) {
    //頻出の形
    return value;
  }
  return value;
};

//in演算子のType Guard
type UserA = { name: "string" };
type UserB = { name: "string"; nickName: "string" };

const boo = (value: UserA | UserB) => {
  if ("nickName" in value) {
    return value;
  }
  return value;
};

//タグ付きのUnion Typesを使ったType Guard( Discriminated Union or Tagged Union)
//同じようなプロパティを持っている時に使われる。
type HumanA = { name: "string"; lang: "japan" }; //その型固有のtag = プロパティを持つことによってプロパティを判断している
type HumanB = { name: "string"; lang: "english" };
type HumanC = { name: "string"; lang: "french" };

const Hoo = (value: HumanA | HumanB | HumanC) => {
  //if分もswitch文も書ける。
  switch (value.lang) {
    case "japan": {
      return value;
    }
    case "english": {
      return value;
    }
    case "french": {
      return value;
    }
    default: {
      throw Error ("lang is not defined!")
      // return value; 最後はnever型になる。ここはあってはならないのでthrow Errorで回避する。
    }
  }
  // if (value.lang ==="japan") {
  //   return value;
  // }
  // return value;
};
