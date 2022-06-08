export type User = {
  name: string;
  } & OptionalPersonalData;

  // type PersonalData = {
  //   //   height: number;
  //   //   weight: number;
  //   [K in "height" | "weight"]: number; //mapped typesの構文

type PersonalData = {
  height: number;
  weight: number;
  realName: string;
};

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K];
};

const user: OptionalPersonalData = {
  height: 162,
  weight: 70,
  realName: "将真",
};
