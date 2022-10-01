/*
JS The Definitive Guide
JS Enlightenment

C/C++/java, compiled, 
takes code and produces a machine efficient representation of it, 
usually optimized for runtime performance 
scripting languages, interpreted, browser runs each line as it get it, 
less priority to runtime performance, more towards prototyping/interactive coding, 
flexibility, 

JS is a scripting language, with performance close to that of native compiled languages.
JS is also used to script applications like Adobe Photoshop, OpenOffice and Google Apps, and is even used as a server-side programming language.

JS 1.0 (Netscape) then Livescript/Javascript (addition ability) 1995
JS 1.3 ECMA script 2000
2005 google maps with JS
JS 1.8.5 2012



functions, reusable, makes code manageable


HTML, markup text
CSS, set of rules
JS, statements, case sensitive






console.log(
*/

//setTimeout (functionName, 5000);


var dog = { name: "Rover", weight: 35 };
//console.log(dog.weight);

// (Math.PI) * X;


/*    Variables and naming    */
/*/////////////////////////////////////////////////////////////////////////////*/
//var winners; //undeclared variable, value of undefined
//var winners = 2(numbers); or "name"(strings) or false or true(boolean values)

/*name variables beginning with a letter, _ , $ and be aware not to use reserved names(i.e keywords) */
/* CamelCase */
/* be consistent in choosing ' or ", 
white space does not matter between code*/

////var name = price - price * ( discount / 100 );
//statement, the whole line
// name, the variable
// = assignment
//expression, the right side

//"text" + "concatenate" + StringOrNumberValueHere


/* gives true or false */
/*
age < 14            
cost >=3.99         
animal == "bear"    
*/

/*p56

/*/////////////////////////////////////////////////////////////////////////////*/

/*
while, if

document.write ("Another scoop <br>");   //block
alert("scoops > 5");
= set value , == equality test

*/

//NOTES
//console.log(1000+"108"); //108 is a string, never gets added
//primitive types, that is, numbers, strings and booleans.
//HTML put <script> in html end of body, so page can load the DOM before JS
//HTML <script type="text/javascript" >
//a script tag with a file reference cant be used for code lines, make another script tag

//Number(true) gives 1 , string of numbers /boolean converter
//first 0 is avoided
//Number(x) == === 2; true/false
//+'string of numbers'; does the same thing

//parseInt('32px'); // 32 , takes integers, 
//also has a second parameter numerical type

//let name = "Sheriff Koder" > SheriffKoder
//let name2 = name.replace(/\s+/g, ''); // replace space with no input


//let scoops = 5;

/*
while ( scoops > 0 ) {                        //conditional   
    document.write ("Another scoop <br>");   //block
    scoops = scoops -1;
}                                            //loop again while conditional true
document.write("Icecream finished!");          //when loop finishes, continue here
*/

/*
if ( scoops >= 5 ) {
    alert("scoops > 5");
}
else if ( scoops < 3 ) {
    alert("scoops getting low");
}
else if ( scoops < 2 ) {
    alert("scoops getting low");
}
else {
    alert("scoops available");

}
*/

/*56-65,65-79,79-87 18/09 30p/30p / 87:logic 

/*/////////////////////////////////////////////////////////////////////////////*/


/*87-91, new file*/

//console.log(function); adds to the calculations for the file


//let twentytwo_09 = prompt("enter value"); // returns null if cancelled

/*
check if valid input  
if (guess < 0 || guess > 6) { 

> logical operators, returns true or false
    || or
    && and
    ! not (results in true if the expression is false)

> boolean operators used in boolean expressions
  which results in true or false

    ==      if equal in value to (comparison)
    ===     if exactly equal in value to
    <=      less than or equal
    >=      greater than or equal
    !=      not equal to


if (guess == location1 || guess == location2 || guess == location3)

if ((user_inputx !=NaN) && (user_inputx > 0) && (user_inputx <= 6) ) in range
alternative look
if (user_inputx < 0 || user_inputx > 6) //out of range , else do

if (inStock == true && (onSale == true || price < 60))
    true/false (true/false)


var kb = 1200;
var x = ( kb > 1000 ); //x = true
if (x); //true?


Math.random(); 0 - > 0.99


/*/////////////////////////////////////////////////////////////////////////////*/
/*
124-148

function name (parameter) {
    body;
}

////////////////////////
//passing to functions//

var name = "rover"; or
bark("rover" , 20, 50); 
//50 is ignored, if put as "20" treated like a number
bark("rover"); 
//weight is undefined

> function bark(name, weight)

bark ( name, 100/4, (name == "ashley") ) 
//can put numeric expressions, boolean returning true or false



//there are built in functions like alert, prompt
//a function can return values, do closures, and be used with objects,
//you define a function with parameters and call it with "arguments"


//pass by value//
let x = 1;
function doIt(x) {
 x = 2;
}
console.log(param); // 1, because the parameter is used/changed locally
//pass by value, the parameter takes a copy and the parameter is only what changes



//functions can return

function fun () {
    let x = 1;
    return x;
}
var y = fun(); //y is 1

//tracing the flow of execution


//variable declared inside a function: local
used only in the function
//variable declared outside a function: global
used anywhere in the code

functions without return, has a value of undefined


//variable shadows
//undeclared variable inside a function,
will be global and used outside after the function's call
and if duplicated without declaration will overwrite the global value
but if name duplicated and declared, it will overwrite inside the function only
//If you forget to declare a local variable using var, that variable will be global, which could have unintended consequences in your program
so be aware, shadow can change the new parameter and not the global


//let z = 5;
func();
function func () {
    z = 0; (first time undeclared mention becomes global )
    //let z = 0; (shadow)
    z = 1+2;
}
console.log(z); // 3, 5

// a good programming practice to use
local variables unless absolutely needed globals


*/
/*/////////////////////////////////////////////////////////////////////////////*/
/*

 JavaScript creates
all local variables at the beginning of a function whether you
declare them or not (this is called “hoisting”

you can put your functions anywhere in your JavaScript file.
because js passes two times over code
first pass, reads all the function definitions
second pass, begins executing codes

global variables, at top of code
keep functions in one place 
local variables at top of function


function setup(width, height) {
 centerX = width/2;
 centerY = height/2;
}
 
computeDistance(x, y, centerX, centerY) {
 var dx = x1 - x2;
 var dy = y1 - y2;
 var d2 = (dx * dx) + (dy * dy);
 var d = Math.sqrt(d2);
 return d;
}



/* Arrays */ /*

let array = []; //empty array, add later 

let array = ['a', 'b', 'c']; // positions 0, 1, 2
array[0]; // a
array.length; // = 3 positions, one more than the last index

var rand1 = Math.floor(Math.random() * words1.length);
if length is 5, it creates 0->4 remember?, exact positions

how many things in an array is determined by the memory of the computer
can put objects in arrays

[1, 2, “fido”, 4, 5]. 
what happens when you check to see if “fido” is greater than 2 ? be aware
try to keep types of values the same

array[-1] or [length+x] undefined


array = ['x','y'];
array.push('z');
now the array = ['x','y','z'];

array = [];
array[0] = 'a';
array[100] = 'b';
//this array has two values in it all other positions are undefined


148-176
*/

/*////////////////////////////////////////////////////////////////////*/
/*

For loops

for ( ;answer != "forty-two"; )  same as while ( answer != "forty-two")

i=i+1; same as i++;
post increment operator



176-203
/*////////////////////////////////////////////////////////////////////*/
/*

Arrays are a data structure for ordered data

The while loop is most often used when
you don’t know how many times you
need to loop, and you’re looping until a
condition is met.

to get the last item in an array
let i = array.length - 1 ;
var recent = array [i];

an undefined array is called, sparse array


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*220

Objects
make a list, 
separate by comma
{},
put var name =

make: chevy
"make": chevy
model: deville
year: 1960
color: red
    
let car = {

make: "chevy"
"make2": "chevy"
model: "deville"
year: "1960"
color: "red"

};

accessing a property 
car.make = "chevy";
var brand = car.make;

adding a new property
car.needsWashing = true;

removing a property
delete car.needsWashing


*/

  
let car = {

    make: "chevy",
    "make2": "chevy",
    model: "deville",
    year: "1960",
    color: "red",
    
    };

console.log (car.make);

car.needsWashing = true;
console.log(car.needsWashing);

delete car.needsWashing;
console.log(car.needsWashing);
