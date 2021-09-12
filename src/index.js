// var val1 = 'var変数';
// console.log(val1);

// // 上書き宣言
// val1 = "var変数を上書き";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const";
// console.log(val3);

// const val3 = "useconst"

const val4 = {
  name: "カイト",
  age: 24,
};
console.log(val4);

// テンプレート文字列
const name = "kaito";
const age = 24;

// const message1 = "私の名前は" + name "年齢は" + age "です。";
const message2 = `私の名前は${name},年齢は${age}になります。`;
console.log(message2);

// アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func = (num1, num2) => {
  return num1 + num2;
}
console.log(func(100, 200));

const myProfile = {
  name: "kaito",
  age: 24,
};

const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
console.log(message1);

const myProfile2 = ['カイト', 24];
const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}歳です。`;
console.log(message3);

// デフォルト値
const sayHello = (name = "テスト") => console.log(`こんにちは！${name}さん!`);
sayHello();

// スプレッド構文　...
const arr = [1,2];
console.log(arr);
console.log(...arr);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr[0], arr[1]);
sumFunc(...arr);

const arr2 = [1,2,3,4,5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4;
console.log(arr8);

const nameArr = ['name', 'kaito', 'suzuki'];
console.log(nameArr);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

const numArr = [1,2,3,4,5,6];
const newNumArr = numArr.filter((num) => {

  return num % 2 === 1;
});

console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "kaito") {
    return name
  } else {
    return `${name}さん`
  }
})
console.log(newNameArr);

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }

const num = null;
const fee = num || '金額未設定';
console.log(fee);

const num5 = 100;
const fee2 = num5 && "何か設定されています";
console.log(fee2);




