
/* Create a string variable with at least 10 characters and convert all text to uppercase (use toUpperCase). */

var x ='instaseat is great'.toUpperCase();
console.log("the answer to 2a is " + x);

/* Create a string variable with at least 10 characters and generate a new string with the first 5 characters 
saving the result in a new variable (use substring). */


var x = 'instaseat is great';
var answer2b = x.substring(0,5);
console.log('the answer to 2b is ' + answer2b);

/* Create a string variable with at least 10 characters and generate a new string with the last 3 characters 
saving the result in a new variable (use substring). */

var x = 'instaseat is great';
var answer2c = x.substring(15);
console.log('the answer to 2c is ' + answer2c);

/* Create a string variable with at least 10 characters and generate a new string with the first letter in uppercase 
and the others in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator). */

var x = 'instaseat is great';
var answer1 = x.substring(0,1);
var answer2 = x.substring(1,x.lenght);
var answer2d = answer1.toUpperCase() + answer2
console.log('the answer to 2d is ' + answer2d);

/* Create a string variable with at least 10 characters and some white space. Find the position of the first blank 
space and store it in a variable (use indexOf). */

var x = 'instaseat is great';
var answer3e = x.indexOf(' ');
console.log('the answer to 2e is ' + answer3e);

/* Create a string variable with at least 2 long words (10 characters and some space in between). Use the methods from the previous exercises 
\to generate a new string that has the first letter of both words in uppercase and the other letters in lowercase 
(use indexOf, substring, toUpperCase, toLowerCase and the + operator). */

var x = 'instaseat! awesomeness';
var split1= x.indexOf(' ');
var splitupper = split1 + 2
var upper1 = x.substring(0,1);
var upper2 = x.substring(split1,splitupper);
var lower1 = x.substring(1,split1);
var lower2 = x.substring(splitupper,x.lenght);
var answer2f = upper1.toUpperCase() + lower1 + upper2.toUpperCase() + lower2;
console.log('the answer to 2f is ' + answer2f);

