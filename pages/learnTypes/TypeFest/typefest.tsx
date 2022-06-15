import { PartialDeep } from "type-fest";

//通常のpartialの課題感
type U = {
  name: string;
  age: number;
  address: {
    country: string;//ネストした値に関してはPartialを使ってもオプショナルにならない。
  };
};

type PU = Partial<U>;

const u: PU = {
  name: "将真",
  age: 25,
  address: {
    country: "日本",  //ここはオプショナルではない
  },
};

//ここの課題感をtype-festを使って解決する。
type H = {
  name: string;
  age: number;
  address: {
    country: string;
  };
}

type PH = PartialDeep<H>; //PartialDeepをtype-festからimport

const p:PH = {
  name: "将真",
  age: 25,
  address:{}//空にしてもerrorが出ない
}