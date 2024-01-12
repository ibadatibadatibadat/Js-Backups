const heros = ["Thor", "Iron", "Spider"];
const dc = ["Superman", "Flash", "Batman"];
// heros.push(dc);
// console.log(heros);
// console.log(heros[3]);

const allheros = heros.concat(dc);
// console.log(allheros);

const allnewheros = [...heros, ...dc];
// console.log(allheros);

const anotherarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realarr = anotherarr.flat(Infinity);
// console.log(realarr);

// console.log(Array.isArray("Ibadat"));
// console.log(Array.from("Ibadat"));
// console.log(Array.from({ name: "ibadat" })); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
