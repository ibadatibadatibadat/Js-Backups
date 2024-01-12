const arr = [1, 2, 3, 4, 5];
const myarr = ["batman", "elliot", "hacked"];
const anoarr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
// console.log(arr);
// anoarr.push(10);
// anoarr.push(11);
// anoarr.pop();
// anoarr.unshift(10);
// anoarr.shift();
// console.log(anoarr);
// console.log(anoarr.includes(9));
// console.log(anoarr.indexOf(5));
const newarr = anoarr.join();
// console.log(anoarr, newarr);
// console.log(typeof newarr);

// slice, splice

console.log("A ", anoarr);
const mynar = anoarr.slice(1, 3);
console.log("B", mynar);
console.log(anoarr);

console.log("C ", anoarr);
const mynar2 = anoarr.splice(1, 3);
console.log("D ", mynar2);
console.log(anoarr);
