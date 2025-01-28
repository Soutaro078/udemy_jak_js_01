/***
 * 
 * const ,letの変数宣言
 */

// ーーーーーーーー
// 
// ^^^^^^^^^^^^

//ES2015の前の変数宣言
// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// // var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// //

// // //ES2015以降の変数宣言
// let var2 = "let変数を上書き";
// console.log(var2);

// // let変数は再宣言不可能
// let var2 = "let変数を再宣言";

//constは定数であり，上書きも再宣言も不可能
// プリミティブ変数は上書き不可能
// ただ，オブジェクト変数の中身は可能
// const val3 = "const変数";
// console.log(val3);

// //constで定義したオブジェクトはプロパティーが変更可能
// const val4 = {
//     name: "じゃけえ",
//     age: 31
// };
// val4.name = 'jak';
// val4.address = "Hiroshima";
// console.log(val4);

// // constで定義した配列のプロパティの変更が可能
// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monky")
// console.log(val5);

//reactの変数宣言では，ほとんどconstが使われる

/**
 * テンプレート文字列
 */

const name = "じゃけえ";
const age = 31;

// 私の名前はじゃけえです．年齢は31歳です

//従来の方法(ひたすらに＋で結合する)
const message1 = "私の名前は" + name + "です．年齢は" + age + "です.";

