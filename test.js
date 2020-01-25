//var userName = ["Kate","Hyun","Jae","Simeon","Samuel",];
//userName.splice(2,1);
//console.log(userName);
//console.log(userName.length);
/*console.log(userName.length-1);
console.log(userName[userName.length-1]);  
userName.push("S");
console.log(userName);  
userName[7] = "J";
console.log(userName);*/  

//userName.pop();
//console.log(userName);  
//userName.shift(2);
//console.log(userName);  
//userName.splice(2);
//console.log(userName);  

//userName.splice(1,3);  
//console.log(userName); 

//delete userName[1];
//console.log(userName) 

/*var myColors = ["blue", "green"];
var myFlowers = ["rose", "sunflower"];
var myColorfulFlowers = myFlowers.concat(myColors);
console.log(myColorfulFlowers);*/

// var colors = ["yellow","green","blue","red"];
// shift removes
// unshift adds
// colors.unshift("pink");
// console.log(colors);



//1. Declaring the students
var grade10 = ["A","B","C"];
var grade11 = ["D","E","F"];
var grade12 = ["G","H","I"];

//2. Remove data from 12th grade
grade12.splice(0);
console.log(grade12);

//3. Transfer data from 11th grade to 12th grade by using "="
var grade12_new = grade11.slice(0);
console.log(grade12_new);

//4. Tranfer data from 10th grade to 11th grade 
var grade11_new = grade10.slice(0);
console.log(grade11_new);

//5. create new array for the 10th grade
var grade10_new = ["J","K","L"];

//6. Check the updates in arrays
console.log("New 10th grade " + grade10_new);
console.log("New 11th grade " + grade11_new);
console.log("New 12th grade " + grade12_new);

//7.
console.log(grade12_new);
grade12_new.shift();
console.log(grade12_new);

//8. Add M to 11th grade
grade11_new.unshift("M");
console.log(grade11_new);

//9. Check the updates in array
console.log(grade10_new);
console.log(grade11_new);
console.log(grade12_new);