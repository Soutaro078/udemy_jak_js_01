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

// const name = "じゃけえ";
// const age = 31;

// // 私の名前はじゃけえです．年齢は31歳です

// // //従来の方法(ひたすらに＋で結合する)
// // const message1 = "私の名前は" + name + "です．年齢は" + age + "です.";
// // console.log(message1);

// //テンプレート文字列を使用する場合
// const message2 = '私の名前は${name}です．年齢は${age}です．';
// console.log(message2);

// const name = "じゃけえ";
// const age = 31;

// // 私の名前はじゃけえです．年齢は31歳です

// // //従来の方法(ひたすらに＋で結合する)
// const message1 = "私の名前は" + name + "です．年齢は" + age + "です.";
// console.log(message1);

// //テンプレート文字列を使用する場合
// // バッククォートを使用する
// const message2 = `私の名前は${name}です．年齢は${age}です．`;
// console.log(message2);

/**?
 * アロー関数
 */

// 従来の関数
// function func1(str){
//     return str;
// }
// console.log(func1("func1です"));

// functionを定義した関数を定義するのもある
// const func2 = function(str){
//     return str;
// }   
// console.log(func2("func2です"));

// アロー関数
// const 関数名　＝　（引数）　=>　{処理内容};
// 引数が1つの時は()を省略できる
// const func1 = (str) => {
//     return str;
// }
// console.log(func1("func1です"));
// // const func2 = (str) => str;と書いてもいい

// const func2 = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(func2(10,20));

// //単一で返すため次のように記載もできる
// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10,20));

// //Reactでも使う書き方（オブジェクトを返す場合）→ （）で囲む
// const func4 = (num1, num2) => ({
//     hoge1: num1,
//     hoge2: num2,
// });
// console.log(func4(10,20));

//hogeは「全く意味のないって意味らしい」

/**
 * 分割代入
 * MyProfile.nameのような書き方はめんどくさい（冗長）
 */
// オフジェクトとプロパティを使う

// const myProfile = {
//     name: "じゃけえ",
//     age: 31,
// }

// const message3 = `名前は${myProfile.name}です．年齢は${myProfile.age}です．`;
// console.log(message3);

// //分割代入を使う
// const { name , age } = myProfile;
// const message4 = `名前は${name}です．年齢は${age}です．`;
// console.log(message4);

// //配列の場合
// const myProfile2 = ["じゃけえ", 31];
// const message5 = `名前は${myProfile2[0]}です．年齢は${myProfile2[1]}です．`;
// console.log(message5);

// //分割代入を使う（変数名は自由）
// const [name2, age2] = myProfile2;
// const messgage5 = `名前は${name2}です．年齢は${age2}です．`;
// console.log(messgage5);


/**
 * デフォルト値（引数，分割代入）
 * 通常，引数がいる関数で引数が与えられない場合や，オブジェクトでプロパティがないのに，定義される場合
 * 「undefined」と表示される
 * そのため，デフォルト値を設定する
 */

// 例
// const sayHello = (name = "ゲスト") => console.log(console.log(`こんにちは！${name}さん！`));
// sayHello("ジャケえ");
// sayHello();

// //オブジェクトの場合

// const introMyself = {
//     age: 31,
// }

// const {  age, name = "ゲスト" } = introMyself;
// console.log(`私の名前は${name}です．年齢は${age}です`);

/**
 * オブジェクトの省略記法
 * プロパティと変数名が同じ時は省略できる
 * 
 */
 
// const naem = "じゃけえ";
// const age = 31;

// 従来の方法
// const myProfile = {
//     name: name,
//     age: age,
// };

// //省略記法  
// const myProfile = {
//     name,
//     age,
// };

// console.log(myProfile);

/**
 * スプレッドシート構文...
 * 展開する機能（ここで，配列やオブジェクトを展開する）
 */

// // 配列の展開
// ary1 = [1,2];
// console.log(ary1);
// console.log(...ary1);

// // 関数で試す
// const sumFunc = (num1,num2) => console.log(num1 + num2);

// console.log(sumFunc(ary1[0],ary1[1]));
// console.log(sumFunc(...ary1));

// // 配列をまとめる
// const ary2 = [1,2,3,4,5];
// const [num1, num2,...ary3] = ary2;
// console.log(num1);
// console.log(num2);
// console.log(ary3);

// // 配列のコピー，結合
// // 配列コピー
// const ary4 = [10,20];
// const ary5 = [...ary4];
// // const ary5 = ary4; これだとary5の値を変えるとary4も変わる(参照渡しになっているから)

// //結合
// const ary6 = [30,40];
// const ary7 = [...ary4, ...ary6];
// console.log(ary7);


/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中","山田","じゃけえ"];
for (let index = 0; index < nameArr.length; index++) {
    console.log(nameArr[index]);
}


