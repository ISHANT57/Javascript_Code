// ✅ String Methods with Examples

// 🔤 Character Access

console.log("a".charAt(0));           // "a"
console.log("a".charCodeAt(0));       // 97
console.log("𝌆".codePointAt(0));      // 119558 (Unicode beyond BMP)
console.log("ISHANT".at(-1));         // "T"


// 🔍 Searching & Comparing

console.log("hello".includes("ell"));     // true
console.log("hello".startsWith("he"));    // true
console.log("hello".endsWith("lo"));      // true
console.log("hello".indexOf("l"));        // 2 first occuring index
console.log("hello".lastIndexOf("l"));    // 3 last occuring index
console.log("helo".lastIndexOf("l"));     // 2
console.log("abc123".search(/\d/));       // 3
console.log("i".localeCompare("i"));      // 0
console.log("i".localeCompare("s"));      // -1

// ✂️ Slicing and Substrings
console.log("JavaScript".slice(4));           // "Script"
console.log("JavaScript".slice(0, 4));        // "Java"
console.log("JavaScript".substring(0, 4));    // "Java"
console.log("JavaScript".substring(4, 10)); // → "Script"

console.log("JavaScript".substr(4, 6));       // "Script"
console.log("JavaScript".substr(4, 2));        // "Sc"

//🧼 Trimming & Padding
console.log("  hi  ".trim());             // "hi"
console.log("  hi  ".trimStart());        // "hi  "
console.log("  hi  ".trimEnd());          // "  hi"
console.log("5".padStart(3, "0"));        // "005"
console.log("5".padEnd(3, "0"));          // "500"

// 🔠 Case Conversion

console.log("ishant".toUpperCase());                   // "ISHANT"
console.log("ISHaNt".toLowerCase());                   // "ishant"
console.log("ishant".toLocaleUpperCase());             // "ISHANT"
console.log("isHaNt".toLocaleUpperCase());             // "ISHANT"
console.log("i".toLocaleUpperCase("tr-TR"));           // "İ" (Turkish capital dotted I)
console.log("I".toLocaleLowerCase("tr-TR"));           // "ı" (Turkish lowercase dotless i)

// 🔁 Replacing & Repeating

console.log("a-b-c".replace("-", "+"));                // "a+b-c"
console.log("a-b-c".replaceAll("-", "+"));             // "a+b+c"
console.log("ha".repeat(3));                           // "hahaha"

// 🧩 Split & Join 

console.log("a,b,c".split(","));                       // ["a", "b", "c"]
console.log(["a", "b", "c"].join("-"));                // "a-b-c"

// 🔗 Concatenation

console.log("Hello".concat(" World"));                 // "Hello World"

// 🔧 Conversion

console.log((123).toString());                         // "123"
console.log((new String("hi")).valueOf());             // "hi"

// 🔣 Unicode Escapes

console.log("\u0041");                                 // "A"
console.log("\u{1F600}");                              // 😀 (Unicode emoji)
