// primitive

// 7 types;- string,number,boolean, null(object),undefined(undefined),symbol,BigInt

const score = 100; //dynamic

const id = Symbol("123");
const anotherid = Symbol("123");

const bignumber = 345674957594759n;

console.log(id == anotherid);
console.log(id);
console.log(anotherid);
console.log(typeof bignumber);
console.log(typeof Symbol);

// reference type (non primitive)

// array , objects ,functions - datatype object function

const heros = ["ironman", "shaktiman", "batman"];

let myobj = {
  name: "ishant",
  age: 20,
};

const myfunction = function () {
  console.log("hello ishant");
};

myfunction();



