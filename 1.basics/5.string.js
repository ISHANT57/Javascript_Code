const name="ishant"
const string4 = new String("A String object");



"ishant".charAt(2)
console.log("ishant".charAt(2)); // "h"

console.log("ishant"[0]); // "i"



const a = 9;
const b = 89;
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}






function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}


const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; should be false 
// this is due to turkish error "ß".toUpperCase() becomes "SS", and so does "ss".toUpperCase(), making them look equal.

console.log(areEqualInLowerCase("ı", "I")); // false; should be true

// "I" vs "ı" are not the same in Turkish:
// "I".toLowerCase("tr-TR") → "ı"
// "i".toUpperCase("tr-TR") → "İ"

// console.log(name);
const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns 4
console.log();
console.log();


// console.log("</b>".bold())
///////////////////////////////////////////////////////////////
let toread="Below are the methods in javascript"
console.log(toread)


console.log("a".charCodeAt());
console.log("A".charCodeAt());
console.log("ISHANT".at(-1));
console.log("i".localeCompare("i"));
console.log("i".localeCompare("s"));
console.log("ishant".toLocaleUpperCase());

console.log("isHaNt".toLocaleUpperCase());
console.log("i".toLocaleUpperCase("tr-TR")); // TURKISH
console.log("I".toLocaleLowerCase("tr-TR")); // TURKISH

const str1 = "abc123def456";
const index = str1.search(/\d+/);
console.log(index); // → 3

const str2 = "abc123def456";
const matches = str2.match(/\d+/g);
console.log(matches); // → ["123", "456"]
