import { FC, CFC } from "react";

//FCの型拡張であるCFCを作る
const Component: CFC = (props) => {
  return <div className={props.className}>test</div>;
};
