const name1 = "Ibadat";
const ReposAcc = 50;
// console.log(
//   `Hello My Name is ${name1.toUpperCase()} and My Github Repos Count is ${ReposAcc}`
// );

const gamename = new String("Ibadat");
// console.log(gamename.__proto__);
// console.log(gamename.length, gamename.toUpperCase(), gamename.toLowerCase);
// console.log(gamename.charAt(4));
// console.log(gamename.indexOf("d"));

const StringName = gamename.substring(0, 4);
// console.log(StringName);

const anotherstring = gamename.slice(0, -3);
// console.log(anotherstring);

const trimstring = "    Ibadat  ";
// console.log(trimstring);
// console.log(trimstring.trim());
const replacestring = "https://ibadat.com/khan%20afridi%20coding";
// replacestring.replace("%20", "-");
// console.log(replacestring.replace("%", "-"));
console.log(replacestring.includes("http"));
console.log(replacestring.split("-"));
