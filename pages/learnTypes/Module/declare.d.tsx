import { FC } from "react";
declare module "react" {
  const Bar: string;
  type CFC<P = {}> = FC<P & { className?: string }>;
}
export {}; //独立したexportを行うことで、Module拡張にしている

//use caseとしては外部のパッケージやライブラリ内の既存のモジュールに対して、型を拡張したいときに用いることがある。
//使用頻度は高めなのでしっかり覚えておく