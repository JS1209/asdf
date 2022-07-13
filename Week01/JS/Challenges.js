const list = require("./list.json");

// Challenge 0
function double1(number) {
    return 2*number;
}
console.log(`Challenge 1: INPUT=1, OUTPUT=${double1(1)}`);

// Challenge 1
function double2(juan, dos) {
    return juan * 2;
}
console.log(`Challenge 1: INPUT=(1, 2), OUTPUT=${double2(1)}`);

// Challenge 2
function double3(juan, dos) {
    return juan > dos ? juan * 2 : dos * 2;
}
console.log(`Challenge 2: INPUT=(2, 1), OUTPUT=${double3(2,1)}`);

// Challenge 3
function repeat(string, number) {
    if (number < 1) {
        return "";
    } else {
        let newString = string;
        for (let index = 1; index < number; index++) {
            newString += string;
        }
        return newString;
    }
}
console.log(`Challenge 3/1: INPUT=("sTrInG", 5), OUTPUT=${repeat('sTrInG', 5)}`);
console.log(`Challenge 3/2: INPUT=("sTrInG", -5), OUTPUT=${repeat("sTrInG", -5)}`);

// Challenge 4
function themesong() {
    let melody = repeat("NaN", 10);
    melody += " batNaN!";
    console.log(`Challenge 4: ${melody}`);
}
themesong();

// Challenge 5
const max = (arg, arg2) => {
    return arg >= arg2 ? arg : arg2
}
console.log(`Challenge 6: INPUT=(5, 2), OUTPUT= ${max(5, 2)}`);

// Challenge 6
const maxDivide = (arg, arg2) => {
    return arg >= arg2 ? arg2/arg : arg/arg2;
}
console.log(`Challenge 6: INPUT=(5, 2), OUTPUT= ${maxDivide(5, 2)}`);

// Challenge 7
const maxStr = (str, str2) => {
    return str.length >= str2.length ? str : str2;
}
console.log(`Challenge 7: INPUT=("four", "ten"), OUTPUT= ${maxStr("four", "ten")}`);

// Challenge 8
const even = (num) => {
    return num % 2 === 0 ? true : false;
}
console.log(`Challenge 8: INPUT=(5), OUTPUT= Is 5 even? ${even(5)}`);

// Challenge 9
const evenBelow = (num) => {
    let evenArr = [];
    for (let i = 0; i < num; i++) {
        if (even(i)) {
            evenArr.push(i);
        }
    }
    return evenArr;
}
console.log(`Challenge 9: INPUT=(9), OUTPUT= ${evenBelow(9)}`);

// Challenge 10
const evenIn = (array) => {
    return array.filter(num => even(num) === true);
}
console.log(`Challenge 10: INPUT=([1,2,3,4,5,6,7,8]), OUTPUT= ${evenIn([1,2,3,4,5,6,7,8])}`);

// Challenge 11
const multiplyArray = (array) => {
    if (array.length > 1) {
        let num = array[0];
        for (let i = 1; i < array.length; i++) {
            num *= array[i];
        }
        return num;
    }
    return array.length === 1 ? array[0] : "Array is empty";
}

console.log(`Challenge 11: INPUT=([1,2,3,4,5,6,7,8]), OUTPUT= ${multiplyArray([1,2,3,4,5,6,7,8])}`);

// Challenge 12
const divideArray = (array) => {
    if (array.length > 1) {
        let num = array[0];
        for (let i = 1; i < array.length; i++) {
            num /= array[i];
        }
        return num;
    }
    return array.length === 1 ? array[0] : "Array is empty";
}
console.log(`Challenge 12: INPUT=([1,2,3,4,5,6,7,8]), OUTPUT= ${divideArray([1,2,3,4,5,6,7,8])}`);

// Challenge 13
const splitCombine = (string, string2) => {
    const newStr = splitWord(string)[0] + splitWord(string2)[1];
    const newStr2 = splitWord(string2)[0] + splitWord(string)[1];
    return newStr.length >= newStr2.length ? newStr : newStr2;
}

function splitWord(string) {
    let newStr = "";
    let newStr2 = "";
    if (string) {
        for(let i = 0; i < Math.ceil(string.length / 2); i++) {
            newStr += string[i]
            if (Math.ceil(string.length / 2) + i < string.length) {
                newStr2 += string[Math.ceil(string.length / 2) + i];
            }
        }
    }
    return [newStr, newStr2];
}
const bedue = splitCombine("1234", "56789");
console.log(`Challenge 13: INPUT=("1234", "56789"), OUTPUT= ${bedue}`);


// Challenge 14
const getName = (object) => {
    return object.name;
}
console.log(`Challenge 14: INPUT=({name: "Jesse", age: 24}), OUTPUT= ${getName({name: "Jesse", age: 24})}`);

// Challenge 15
const getNames = (objects) => {
    const names = objects.map(object => {
        return object.name;
    });
    return names;
}
console.log(`Challenge 15: INPUT=({name: "Jesse", age: 24}), OUTPUT= ${getNames([{name: "Jesse"}, {name: "Shile"}])}`)

// Challenge 16
const combineName = (list) => {
    const combined = list.map(object => {
        return `${object.firstName} ${object.lastName}`;
    });
    return combined;
}

console.log(`Challenge 16: INPUT=({firstName: "Jesse", lastName: "Schoenmakers"}, {firstName: "srekamneohcS", lastName: "esseJ"}), OUTPUT= ${combineName([{firstName: "Jesse", lastName: "Schoenmakers"}, {firstName: "srekamneohcS", lastName: "esseJ"}])}`)
console.log(`\n\nI got bored of the "CHALLENGE ...: ..."-format so from here on I like to play a game :)`)
// Challenge 17
const getCountry = (object) => {
    return object.country;
}

const uniqueCountries = (list) => {
    let uniques = [];
    for (let i = 0; i < list.length; i++) {
        let country = getCountry(list[i]);
        if (!uniques.includes(country)) {
            uniques.push(country);
        }
    }
    return uniques;
}
console.log(uniqueCountries(list));

// Challenge 18
const countCountries = (list) => {
    let counts = [];
    for (let i = 0; i < list.length; i++) {
        let country = getCountry(list[i]);
        if (!counts.includes(country)) {
            counts += country;
        }
    }
    return counts;
}
console.log(countCountries(list));

// Challenge 19
console.log(Math.max(...[1,5,3,7,4,2,7,5,5,8,9,6,4,2,5,0]));

// Challenge 20
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,5,3,7,4,2,7,5,5,8,9,6,4,2,5,0]));

// Challenge 21
const mode = (list) => {
    const counts = [];
    for (let i = 0; i < list.length; i++) {
        const object = counts.find(ele => list[i] === ele.id);
        if (object) {
            object.count += 1;
        } else {
            counts.push({id: list[i], count: 1});
        }
    }
    return counts;
}
const array = mode([1,5,3,7,4,2,7,5,5,8,9,6,4,2,5,0]);
console.log(array);

// Challenge 24
const pyramid = (level) => {
    for (let i = 0;i < level; i++) {
        console.log("x" + 'x'.repeat(i) + "x");
    }

}
pyramid(10);