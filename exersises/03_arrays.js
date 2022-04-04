/* Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"] show by console the months 5 and 11 (use console.log). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
console.log ('3a: the 5th month is ' + montharray[5]);
console.log ('3a: the 11th month is ' + montharray[11]);

/* Sort the months array alphabetically and display it by console (use sort) */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
montharray.sort();
console.log ('3b: the months sorted alphbetically are ' + montharray);

/* Add an element to the beginning and end of the array (use unshift and push). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
montharray.unshift('2021')
montharray.push('2022')
console.log ('3c: adding to the front and end ' + montharray)

/* Remove an element from the beginning and end of the array (use shift and pop). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
montharray.shift()
montharray.pop()
console.log ('3d: subtracting from the front and end ' + montharray)

/* Invert the array order (use reverse). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
console.log ('3e: flip it and revese it ' + montharray.reverse())

/* Join all elements of the array into a single string where each month is separated by a hyphen - (use join). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
console.log ('3f: join it ' + montharray.join("-"))

/* Create a copy of the months array containing May through November (use slice). */

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];
console.log ('3g: slice it ' + montharray.slice(4,11))
