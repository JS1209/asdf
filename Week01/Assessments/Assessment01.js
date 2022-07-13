const characters = require("./characters");

console.log("\n Challenge A");
console.log(characters[3]);

console.log("\n Challenge B");
console.log(characters.find(character => {return 78 === character.id;}));

console.log("\n Challenge C");
const charArr = characters.filter(character => {return "Half-blood" === character.blood;});
console.log(charArr);

console.log("\n Challenge D");
const qouteArr = characters.map(character => {return character.quote;});
console.log(qouteArr);

console.log("\n Challenge E");
const notHuman = characters.filter(character => {return !character.species.includes("Human");});
console.log(notHuman);

console.log("\n Challenge F");
const inclArg = characters.filter(character => {return character.name.includes("agr");});
console.log(inclArg);
