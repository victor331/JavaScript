console.log("Vic's Js Tutorial"); 

/*
var myName = " Victor C!" //
myName = 6 

let ourName = "Coding masters"

const pi = 3.14 // constant value
*/

var a; 
var b = 2;


a = 7;

b = a;

console.log(a)

var a1 = 5;
var b1 = 10;
var c1 = "I am a "

a1 = a1 + 1;
b1 = b1 + 5;
c1 = c1 + "String!";
console.log(a1);
console.log(b1);
console.log(c1);

/*
Variables are case sesitive all words are to starte with lowercas!!
for addition
*/
var sum = 10 + 10; 
console.log(sum);

// for subtraction
var difference = 45 - 5;
console.log(difference);

// Multiplication
var product = 8 * 10;
console.log(product);

// divition
var quotient = 66 / 33;
console.log(quotient);

// increamenting Numbers 
var myVar = 87; 
myVar++;
console.log(myVar);

// decreamenting numbers
var myVar = 11;
myVar = myVar - 1; 
console.log(myVar);

// Creating Decimal Numbers in JS
var ourDeimal = 5.7;
var myDecimal = 0.0009;
console.log(myDecimal);
console.log(ourDeimal);

// multiply Decimals
var product = 2.0 * 2.5;
console.log(product);

//remainder
var remainder;
remainder = 11 % 5;
console.log(remainder);

//couples
var couples 
couples = ("Ruth & Victor");
console.log(couples);

// compound assignment with Argumented addition, sub,multipl., Divi,
var a2 = 3;
var b2 = 17; 
var c2 = 12;

a2 = a2 +12;
// a2 += 12;
b2 = b2 + 9;
// b2 += 9;
c2 = c2 - 3;
// c2 -= 3;

var myFirstName = "Victor";
var myLastName = "Nwanebu";
console.log(myFirstName, myLastName);
//console.log("Victor Nwanebu");

//how to quoat a String
// with the use of single quote for the main string 
var myString = 'my website "https://www.w3schools.com/js/" '
console.log(myString);

//quotation with the use of double quote + backward slash 
var myString1 = "my website \"https://www.w3schools.com/js/\""
console.log(myString1); 

/***
 * CODE OUTPUT
 * \' single Quote
 * \" double quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 * example in oneline code 
 */
var mystr = "FirstLine\n\t\\SecondLine\nThirdLine"

//concatinating Strings
var myNam = "Victor";
mystr ="My Name is " + myNam + " and i am very well" ;
console.log(mystr);

//constructing strings with variables
var myNam1 = "Victor C. ";
myNam1 += "Nwanebu.";
console.log(myNam1);

//Appending string with variables
var anAdjective = "Expedient";
var aVerb = "do not pursue ";
aVerb += anAdjective
console.log(aVerb);

// to find the lelnght of a string
var myFirstNameLenght = 0;
var firstName = "Victor";
myFirstNameLenght = firstName.length ;
console.log(myFirstNameLenght);

firsLetterOfTheFirstName = firstName[0];
console.log(firsLetterOfTheFirstName);

//String immutability
var myImmString = "Hello Bonn City";
myImmString = "Beautiful Bonn"
console.log(myImmString);

//word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "the" + myAdjective + myNoun + myVerb + " towards my house" + myAdverb;
    return result;
}

console.log(wordBlanks("Dragon ", " sexy ", "ran", " quickly."));
console.log(wordBlanks(" Children ", " smart ", "listen", " effectivly."));

//store multiple values with array Eelments in an Array can be any data type
var ourArray = ['Victor', 29];
console.log(ourArray);
//nested Array or a multi dimentional Array
[["Victor", "Chijoke"], [27, "Young"]];

//Example of an Array
var ourArr = [70, 20, 22, 09];
var ourData = ourArr[2];
console.log(ourData); 

ourArr[1] = 40;
console.log(ourArr);

//access multidimentional array with index
var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14]; // let's print the number 8

var myData = myArray[2][1];
console.log(myData);

//manipulating array with push and pop
var puArray = ["Victor", "is"];
puArray.push (["is", "a gentle man."]);
console.log(puArray);

var poArray = [2,4,5];
var delArray = poArray.pop();
console.log(poArray);
console.log(delArray);

//maipulate array with shift 
var shiArray = ["God is great","yes"," he is"];
var removeFromShiArray = shiArray.shift();
console.log(shiArray);  
//unshift
shiArray.unshift("God is good");
console.log(shiArray);

shiArray.unshift(["GOOD BOY"]);
console.log(shiArray);

//creating shopping list (listing)
var myList = [["orangis", 2], ["Bananas", 3], ["Tom-Brown pudding", 15],["Spinat", 5]["eggs"]];
console.log(myList);

//write reusable code with Functions
function firstFunction (){
    console.log("I am blessed");
}
firstFunction();
firstFunction();
firstFunction();

//example of a Function
function ourFunction (a, b){
    console.log(a - b);
    console.log(a + b);
    console.log(a / b);
    console.log(a * b);
}
ourFunction (10, 5);
ourFunction (10, 5);
ourFunction (5, 20);
ourFunction (10, 50);

//global scope and function
var myGlobal = 10;
function fun1(){
    oppsGlobal =5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oppsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//Local Scope and functions
function myLocalScope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

//Global vs Local scope function
var outerWear = "T-shirt"; //global variable because it is declared outside the function
function myOutfit(){
    var outerWear = "sweater";//local variable
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

//return a value from a function with return
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(20));
function mulFive(num){
    return num * 10;
}
console.log(mulFive(5));

//undefined value retuned from function 
var sum = 0;
function addThree(){
    sum = sum + 3;
}
console.log(addThree);

//Assignment with a return value
/**
 * var change = 0;
function change(num1){
    return (num1 + 20) / 5;
}
changed = change(35);

var processed = 0;

function porcessArg(num1){
    return (num1 + 3) / 5;
}
processed = porcessArg (7);
console.log(processed);

 */

//stand in line 
function nextInLine(arr, item){
    arr.push(item);

    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.STRINGIFY helps to change array into a string
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//boolean values
function welcomeToBooleans(){
    return true;
}

//using conditional logical statment
function ourTrueOrFalse(isItTrue){

    if(isItTrue){
        return "Yes, it is true";
    }
    return "No, it it false";
}
console.log(ourTrueOrFalse(false));

//comparism with equality operation
function testEqual(val){
    if(val == 12){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(19));

//comparism with the strick equality operator
function testStrict(val){
    if(val === 7){
        return "Equal";
    }
    return "Not equal";
}
console.log(testStrict('19'));

//practise comparing different values
function compareEquality (a, b){
    if(a === b){ // if we us only double euqlity sign ==, the outpute woill be "not equal"
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality (10,"10"));

// not equality testing 
function testNotEqual(val){
    if (val != 99){
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10)); 

//ilterate with while loops (loops allow one to run codes multiple times)
var myLoopedArray = [];

var i = 0;
while ( i< 5){
    myLoopedArray.push(i);
    i++;
}
 console.log(myLoopedArray);

 //iterate with for loops
var ourForArray = [];

for (var i=0; i<5; i++){
    ourForArray.push(i);
}
console.log(ourForArray);

// iterate odd numbers with for loops 
var ourOddArray = [];
 for (var i = 0; i < 10; i +=2){
     ourOddArray.push(i);
 }
 console.log(ourOddArray);

 //iterate odd numbers with for loops
 var ourOddForLoop = [];
 for (var i = 1; i<100; i++){
     ourOddForLoop.push(i);
 }
 console.log(ourOddForLoop);

 //count backwards with a for loop
 var ourBackward = [];
 for (var i = 10; i >0; i-=2){
     ourBackward.push (i);
 }
 console.log(ourBackward);

 var myBackwardLoop = [];
 for (var i = 9; i>0; i -=2){

    myBackwardLoop.push(i);
 }
 console.log(myBackwardLoop);
 
 //iterate through an array with a for loop to add all the number in the array
 var thrArray = [1,2,3,5,6,7,9];
 var ourTotal = 0;

 for (var i=0; i<thrArray.length; i++){
     ourTotal += thrArray[i];
 }
 console.log(ourTotal);

 // nesting for loops 
function multiplyAll(arr){
    var product = 1;

    for(var i = 0; i<arr.length; i++){
        for ( var j= 0;j< arr[i].length; j++){
            product *= arr[i][j];
        }
    }

    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// export and import help for the reusal of codes Block