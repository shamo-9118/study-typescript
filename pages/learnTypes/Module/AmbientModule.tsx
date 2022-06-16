import Moo from "Moo";
import data from "hogehoge.mp3";
 //mp3ファイルなどはデフォルトのJSでは基本的には読み取ることができないけど、Ambient Moduleを使って型を定義することによって使用可能になっている。
Moo.bar;

//ambient moduleは使用頻度してはそこまで高くはない
//JSがデフォルトで読み込めないファイルに対して型を定義する
//JSはデフォルトでは内部にある画像ファイルを読み込むことができない
