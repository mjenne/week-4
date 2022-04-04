/* Create a random number between 0 and 1 using the Math.random() function, if the value is greater than or equal to 0.5 
display an alert with the message "Greater than 0.5" and otherwise an alert with the message "Lower than 0.5". */

var rando = Math.random();
if (rando >= .5) {alert(rando + " is greater than or equal to .5");}
else {alert(rando + ' is less than .5');}

/* Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
i) "Bebe" if the age is less than 2 years;
ii) "Child" if age is between 2 and 12 years;
iii) "Teenager" between 13 and 19 years old;
iv) "Young" between 20 and 30 years old;
v) "Adult" between 31 and 60 years of age;
vi) "Older adult" between 61 and 75 years of age;
vii) "Elderly" if over 75 years of age.
*/

var age = Math.round((Math.random() * 100));
if (age < 2) {alert("you are a baby. you are " + age + " years old");}
else if (age < 12) {alert("you are a child. you are " + age + " years old");}
else if (age < 19) {alert("you are a teenager. you are " + age + " years old");}
else if (age < 30) {alert("you are a young adult. you are " + age + " years old");}
else if (age < 60) {alert("you are an adult. you are " + age + " years old");}
else if (age < 76) {alert("you are an older adult. you are " + age + " years old");}
else if (age > 75) {alert("you are elderly. you are " + age + " years old");}
