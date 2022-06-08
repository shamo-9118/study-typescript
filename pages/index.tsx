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

const Home: NextPage = () => {
  return <div className=" text-4xl">Hello</div>;
};

export default Home;
