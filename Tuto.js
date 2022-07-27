/* 
Auto: Victor Chijioke Nwanebu.
on window-11 OS with visual-Studio-Code
*/

console.log("Hello Javascript");

//logical scope with return
function returnMinusSeven (num){
    return num -7;
}
console.log(returnMinusSeven(10));

function timesFive (times){
    return times * 5;
}
console.log(timesFive(10));

// understanding undefined value returned from a function
var sum = 0; //global variable
function addThree (){
    sum += 3;
}
console.log(addThree(3));

//assigment with a retun value 
var summ1 = 0;
function assiVal (num){
    return (num + 5) / 3;
}
summ1 = assiVal(10);
console.log(assiVal);

//Stand in line (qeue) using nextInLine function
function nextInLine (arr, item){
    arr.push (item);
    return arr.shift();
}

var testArr = [1,2,3,4,5,];

console.log("Before: " + JSON.stringify (testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//boolean, if statement
function myBoolean (isItTrue){
    if (isItTrue){
        return "Yes it is true";
    }
    return "false";
}
console.log(myBoolean(true)); 

// comparing with the equality operator
function testEqual (val){
    if (val == 12){
        return "Equal";
    }
    return "Not equal";
}
console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12"));

//comparing with the strict equality ===
function testStrictEqual (val1){
    if (val1 === 12){
        return "true";
    }
    return "No Match fund";
}
console.log(testStrictEqual("12"));
console.log(testStrictEqual(12));

//comparing with the iinequality operator
function testInequalitySign (num1){
    if (num1 != 12){
        return "No Match for you today";
    }
    return "Yuhuuu";
}
console.log(testInequalitySign(12));

//comparing with the logical AND operator ( <, >, >=, <= )
function testGreaterThan (val){
    if (val >= 12){
        return "God is great";
    }
    return "under his grace";
}
console.log(testGreaterThan(12));

//comparing with the logical And Operator
function testLogicalAnd (val){
    if (val <= 50 && val>= 25){
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(30));

//comparing the logical OR operator 
function testLogicalOr (val){
    if (val <=10 || val >= 20 ){
        return "ye it is";
    }
    return "Nope";
}
console.log(testLogicalOr(15));

//chaining if else statement
function testSize (num){
    if (num < 5){
        return "Smally";
    }else if(num < 10){
        return "pinkily";
    }else if(num <15 ){
        return "Medium";
    }else if(num< 20){
        return "mega Pint";
    }else {
        return "larg";
    }
}
console.log(testSize(19));

//Golf code
var names = ["Hole-in-one", "Eagle", "Birdie", "par", "Bogey", "DOuble Bogey"]
function golfScore (par, strokes){
    if(strokes == 1){
        return names [0]
    }else if (strokes <= par -2){
        return names [1]
    }else if (strokes == -1){
        return names [2]
    }else if (strokes == par){
        return names [3]
    }else if (strokes == par + 1){
        return names [4]
    }else if (strokes == par + 2){
        return names [5]
    }else if (strokes >= par + 3){
        return names [6]
    }
}
console.log(golfScore(1, 2));

//switch statements
function caseInSwitch (val){
    var answer = "";
    switch (val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;  
    }

    return answer;
}
console.log(caseInSwitch(2));

//default option in switch statements
function switchOfStuffs (val){
    var answer = "";
    switch (val){
        case "a":
            answer = "Amazing";
            break;
        case "b":
            answer = "Beautiful";
            break;
        case "c":
            answer = "Charming";
            break;
        case "d":
            answer = "Diligent";
            break; 
        default:  //defaulf will return stuffs whenever we try to print anything that is not in the case
            answer = "Stuffs";
            break;
    }

    return answer;
}
console.log(switchOfStuffs("d"));
console.log(switchOfStuffs("e"));

// multiple identical Options in switch statements
function sequentialSizes (val){
    var answer1 = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer1 = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer1 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer1 = "High";
            break;
    }
    return answer1;
}
console.log(sequentialSizes(9));

//replacing if else chain with switch

/*
function chainToSwitch(val){
    var answer = "";

    if (val === "bob"){
        answer = "Victor";
    }else if (val === 42){
        answer = "The answer";
    }else if (val === 1){
        answer = "There is no #1";
    }else if (val === 99){
        answer = "this is how much you have been blessed";
    }else if (val === 7){
        answer = "Ate Nine";
    }
    return answer;
}
*/
function chainToSwitch(val){
    var answer = "";

    switch(val){

    case "bob":
        answer = "Victor";
        break;
    case 42 :
        answer = "The answer";
        break;
    case 1 :
        answer = "There is no #1";
        break;
    case 99:
        answer = "This is how much you have been loved";
        break;
    case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;
}
console.log(chainToSwitch("bob"));

//returning boolean value from Functions
function isLess (a, b){
    if(a < b){
        return true;
    }else {
        return false;
    }
}
console.log(isLess(10, 5));

//returning early pattern from a function
function abTest(a, b){
    if (a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));


//counting card

var count = 0;
function cc(card){

    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break; 
    } 

    var holdbet = "Hold"
    if(count > 0){
        holdbet = "Bet"
    }

    return count + " " + holdbet;
}
cc(2); cc(3); cc(7); cc("K"); cc('A');
console.log(cc(5));

//build javascript OBJECTS and accessing properties in an object with DOT Notation
var ourDog = {
    //propertie
    "name": "Jerry",
    "legs": 4,
    "Tails": 1,
    "friends": ["everything"]
};

var myDog = {
    "name": "Jacky",
    "legs": 3,
    "Tails": 2,
    "freinds": []
};

var nameValues = ourDog.name;
var legsValues = ourDog.legs;
var tailValues = ourDog.friends;

console.log(nameValues); 
console.log(legsValues); 
console.log(tailValues); 


var europeanCountries = {
    "name": "Germany",
    "popul": 2000000,
    "politiks": "Democrasy",
    1: "car making"
};
var naOutput = europeanCountries.name;
console.log(naOutput);

var eMoney = 1;
var mMoney = europeanCountries[eMoney];
console.log(mMoney);


//accessing object properties with BRACKET nOTATION
var nameValues = myDog["Tails"];
var legsValues = myDog["freinds"]

console.log(legsValues);
console.log(nameValues);

//accessing with variables 
var teamMembers = {
    1: "Jacky",
    23: "Lucky",
    3: "cythia",
    30: "Prister"
};

var nameNumber = 1;
var mNameValues = teamMembers[nameNumber];
console.log(mNameValues);

//updating object properties
var ourDog = {
    //propertie
    "name": "Jerry",
    "legs": 4,
    "Tails": 1,
    "friends": ["everything"]
};
ourDog.name = "Happy Jerry"

var nDoggy = ourDog.name;
console.log(nDoggy);

//add new properties to an OBJECT

var europeanCountries = {
    "name": "Germany",
    "popul": 2000000,
    "politiks": "Democrasy",
    1: "car making"
};

europeanCountries.numbers = "forthyfour";

europeanCountries['numbers'] = "forthy"

//delete properties from object

delete europeanCountries.politiks;

//using object for lookup

function phoneticLookup(val){
    var result = "";

    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "Charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];

    return result;
}
console.log(phoneticLookup("alpha"));

//testing objects for properties with the hasOwnProperty method 
var myObj = {
    gift: "Pony",
    pet: "kitty",
    bed: "sleigh"
};

function checkObj (cheky) {
    if (myObj.hasOwnProperty(cheky)) {
        return myObj[cheky];
    }else {
        return "Not Found"
    }
}
console.log(checkObj("pet"));


//manipulating complex objects with different Data types
 var myMusic = [
     {
         "Artist": "Billy Joel",
         "title": "Piano Man",
         "release_year": 2022,
         "formats": [
             "cd",
             "8T",
             "LP"
         ],
         "gold": true
     },

     {
         "artist": "2Pac",
         "title": "Dear Mama",
         "release_year": 2022,
         "format": [
             "Spotify"
         ]
     }

 ];


//accessing nested objects
var nesObj = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = nesObj.car.inside["passenger seat"];
console.log(gloveBoxContents);

//Assesing nested arrays

var myPlan =[
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }

];

var secondTree = myPlan[1].list[1];
console.log(secondTree);

//record-collection project

var collection = {
    "123": {
        "album": "Slippery when wet",
        "artist": "Bon jovi",
        "tracks": [
            "let it Rock",
            "You give love bad name"
        ]
    },
    "345": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "little Red Carvett"
        ]
    },
    "567": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "8910": {
        "album": "ABBA GOLD"
    }

};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //keep a copy of the collection for tests

function updateRecord(id, prop, value) {
    if (value === "") {
        delete collection[id] [prop];
    }else if ( prop === "tracks") {
        collection [id] [prop] = collection[id] [prop] || [];
        collection [id] [prop].push(value);
    }else {
        collection [id][prop] = value;
    }

    return collection;
}
console.log (updateRecord(8910, "artist", "AABBA"));

//count iterate with for loop

var myForLoop = [];
for (var i= 0; i<5; i++){
    myForLoop.push(i);
}
console.log(myForLoop);

var forLoop = [];
for (var i = 0; i<10; i+=2){
    forLoop.push(i);
}
console.log(forLoop);

var divLoop = [];
for (var i=20; i>0; i-=2){
    divLoop.push(i);
}
console.log(divLoop);

// iterate with do... while lops(a do.. while loops runs atleast once before checking he condition)
var myWhileDo = [];
var i = 10;

do {
    myWhileDo.push(i);
    i++;
}while (i < 5 )
console.log(i, myWhileDo);

// Generating random Fractions
function randomFraction (){
    return Math.random( );
}
console.log(randomFraction( ));

//Generate randon whole number 

function randonWholeNum(){
    return Math.floor(Math.random() * 10);
}
console.log(randonWholeNum());

//generate randon whole number between a range

 function myRamdonRange (ourMin, ourMax) {

     return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
 }
var myRandom = myRamdonRange (0, 15);
 console.log(myRandom);

function ourRandomRange (ourMini, ourMaxi) {
     return Math.floor(Math.random() * (ourMaxi - ourMini +1)) + ourMini;
 }
 var printRandomNum = ourRandomRange (10, 100);
 console.log(printRandomNum);

// use the parseInt function; this takes in a string and return an integer 

function convertToInteger (str){

    return parseInt(str);
}
convertToInteger("76");

// use the parseInt Function with a radix(bases)
function convertToInteger (str){

    return parseInt(str, 2  ); //base 2
}
convertToInteger("10011");

//use the conditional(ternary) operator

/*
function checkEqual (a, b){
    if(a === b){
        return true;
    }
    else {
        return false
    }
}
checkEqual(1, 2);
*/

//example code is a ternary representation of the above lines of codes 
function checkEqual (a, b) {
    return a === b ? true : false; //this line of code is equal to return a===b
}

//use of multiple conditional (ternary) operators
function checkSign(num){
    return num >0 ? "positive" : num < 0 ? "negative" : "zero" // zero is returned if none of the conditions are true 
}
console.log(checkSign(10));

//Differences between the "var" and "let" keywords

/* 
let allows you to declare variables that are limited to the scope of a block statement, 
or expression on which it is used, unlike the var keyword, which declares a variable globally, 
or locally to an entire function regardless of block scope.

Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope.

Example:
let x = "John";
let x = 0
//syntax error: x has already been declared

*/

//declare a 'Read-only' Variable with the const keyword: 'const' is another way to declare a variable it hass all the future of let but it can only be read 

/* 

Constants are block-scoped, much like variables declared using the let keyword. 
The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), 
and it can't be redeclared (i.e. through a variable declaration). However, 
if a constant is an object or array its properties or items can be updated or removed.

Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.

example:
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

*/

//mutate an array declared with const
const s = [5,7,2,];
function editInPlace () {
    "use strict";

    // s = [2,5,7]; this will trow an unknown error

    s[0] = 2;
    s[1] = 5;
    s[2] = 7; // with these we have reasigned the array
}
editInPlace();
console.log(s);

//prevent object mutation with 'object.freez'

/*
function freezObj () {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezObj();
  */

//use Arrow Functions to write Concise Anonymous Functions
var magic = function() {
    return new Date();
};
 //the above code could be written in one line 
var magic = () => new Date();

//write an arrow functions with parameters
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2,], [3,4,5]));

//Write Higher Oder Arrow Functions
var realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaresIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x );
    return squaresIntegers;
};

const squaresIntegers = squareList (realNumberArray);
console.log(squaresIntegers);

//write higher oder arrow functions 
 const increment =(function() {
     return (number, value = 1) => number + value;
 }) ();
 console.log(increment(5));
 console.log(increment(5, 2));
 console.log(increment(5, 3));

/* 
 use the rest operator with function parameters
 the rest operator allows us create a function that takes variables number of arguments and it syntax is '...' (three dots)

*/

var sum = (function(){
    return function sum (x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));
//the above code can be reduce with 'rest' operator
var sum = (function(){
    return function sum (...args) {
            return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2,3,5, 7));

//the use of 'spread' operator to evaluate the Arrays In-place

//use destructuring asignment to assign variables from objects
var voxel = {x:3, y:3.5, z:6.53 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z; //old way of assigning variable from object

//with destructuring NB destructuring is always with {}
var voxel = {x:3, y:3.5, z:6.53 };
const { x : a, y : b, z : c} = voxel; //a = 3, b =3.5, c=6.53

//use destructuring Assigment to assign variable from Arrays
var [z, x, , , y] = [1,2,3,4,5,6,7];
console.log(z, x, y); // to print 5 we can just add commas without any element

//switching positions with destructuring
let q = 8, v = 6;
(() => {
    "use Strict";
    [q, v] = [v, q];
})();
console.log(q);
console.log(v);

// create string usng a template Literals
const person = {
    name: "Kelvin Hart",
    age: 56
};
        //template literal with multi-line and string interpolation 
const greeting = `Hallo, my name is ${person.name}! I am ${person.age} years old. `; //${} helps us to put variable into a string

console.log(greeting);

//write Concise declarative Functions (an object can contain a function)
const bicycle = {
    gear: 2,
    setGear: function(newGear){
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
       //alternative for the above code without setGear function
const bicyclee = {
    gear: 2,
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

bicyclee.setGear(3);
console.log(bicyclee.gear);

//Use class syntax to define a constructor function
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle(' jupiter');
console.log(zeus.targetPlanet)

//alternative
class SpaceShip {
    constructor (targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShip('venus');

console.log(zeus.targetPlanet)

//example with vegetable class

function makeClass() {
    class vergetable {
        constructor(name){
            this.name = name;
        }
    }
    return vergetable;
}
const vegetable = makeClass();
const carrot = new vegetable('carrot');
console.log(carrot.name);

//use getters & setters tocontrol access to an object 
/**
 * 
 * class Book {
    constructor(author){
        this._author = author; //the underscore(_) means the variable is a private variable which cannot be assesed outside the class
    }
    //getter; getter functions are meant to retun the value of an objects private variables without without the user personaly accesing the variable
    get writer(){
        return this._author;
    }
    // setter;
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass()
*
*/
function makeClass(){

    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = temperature = 26;
temp = thermos.temperature;
console.log(temp);

//import and require
import { capitaliseString } from "./string_function";
const cap = capitaliseString ("hello");
console.log(cap);