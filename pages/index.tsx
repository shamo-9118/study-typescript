import type { NextPage } from "next";

//↓型アサーション (基本使わない)
let foo = {} as { bar: number };
foo.bar = 1;

//型アノテーション
function double(x: number): number | undefined {
  if (x < 0) {
    return;
  }
  return x * 2;
}

const bar: boolean = false; 

const voo: string = "今日は";
const goo: string = `アンガー${voo}マネー` 

const too: null = null; 
const un : undefined = undefined; //undefinedを使う。


const Home: NextPage = () => {
  return <div></div>;
};

export default Home;
