1. What is an array?
	-it is special variable that can store multiple values at a a time.

var userName1 = "Kate";
var userName2 = "Hyun";
var userName3 = "Jae Young";

var userName = ["kate", "Hyun", "Jae Young"];


2. How to create an ARRAY?
	-using an array literal is the easiest way
var userName = ["value1", "value2", "value3"];

let's create an array of colors; and name it as colors, put 5 values'

var color = ["red", "orange", "yellow"];


3. How to access an Array?
	-You can access an array element with index number;
var userName = ["Kate", "Hyun", "Jae Young"];
userName[0];
console.log(userName[0]) //kate will return
console.log(userName[1]) //Hyun will return

4. How to change the value of an array?
	-same as variables
var userName = ["kate","Hyun","Jae"];
userName[0] = "Kim"

5. How to check how many elements in an array
	-use "length" property
var userName = ["Kate","Hyun","Jae"];
console.log(userName.length); //return 3

6. How do you access the first element of an array?
	-userName[0]; //return "Kate"

7. How do you access the last elements of an array?
	-userName[userName.length-1];

8. Adding array elements
	-var userName = ["Kate","Hyun","Jae"];
	-Use push method!!
	-username.push("Simeon");

9. Adding elements to specific elements
	var userName = ["Kate","Hyun","Jae"];
	userName[7] = "Simeon";

10. Removing elements from an array
var userName = ["Kate","Hyun","Jae"];
	a. pop - removes from the end of an array
		i.e. userName.pop() //["Kate", "Hyun"];
	b. shift - removes from the beginning of an array
		i.e. userName.shift() //["Hyun","Jae"];
	c. splice - removes frmo a specific array index
		i.e. userName.splice(1,1) //"Hyun" will be deleted
		i.e. userName.splice(1) //"Hyun"
	d. delete
		i.e. delete userName[1] //"Hyun" will be deleted

11. Merging(concatenating) Arrays
	a. var myColors = ["blue", "green"];
	b. var myFlowers = ["rose", "sunflower"];
	c. var colorFlowers = myColors.concat(myFlowers);

12. Merging multiple Arrays
	a. var array1 = ["blue","red"];
	b. var array2 = ["yellow","green"];
	c. var array3 = ["brown","black"]
	d. var array4 = array1.concat(array2, array3);

13. Getting index value from an array
	a. use indexOf() method
	b. nameOfArray.indexOf("value");

14. How to add an element to the beginning of an array
	a. var array1 = ["blue","red"];
	b. array1.push("green");
	c. console.log(array1)

15. How to add an element to the middle of an array
	a. var array1 = ["blue","red"]
	b. array1.unshift("yellow");
	c. console.log(array1)
	d. shift vs. unshift

16. How to add an element to the middle of an arrays
	a. var array1 = ["blue","red","green","yellow"]
	b. array.splice(2,1,"black")
	c. console.log(array1)
	d. splice modifies the content of an array by removing existing element and/or adding new element
	e. what if you do not want to remove but just add more elments in the middle?
	f. array.splice(20,"black")

17. How to slice out a piece of an array into a new array
	a. var array1 = ["blue","red","green","yellow"]	
	b. var array2 = array.slice(2);
	c. slice() method creates a new array.  It does not remove any elments in the source array
	d. var array3 = array1.slice(1,2);

Array sorting
18. How to sort elments in alphabetical order
	a. use sort() method
	b. var colors = ["red","green","blue","black"];
	c.colors.sort(); 

19. How to reverse elements in Arrays
	a. var colors - ["red","green","blue","black"];
	b. colors.reverse();







