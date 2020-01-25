var grade10 = ["Hyun","Jae","Simeon","Samuel"];
var grade11 = ["Kate","Stephanie","Jay"];
var grade12 = ["Via","Ryan","David"];


grade12.splice(0,3)
console.log(grade12);

grade12.splice(0);
console.log(grade12);

grade11 = grade12;
console.log(grade12);

var indexOfKate = grade12.indexOf("Kate");
console.log(indexOfKate);
grade12.splice(indexOfKate,1);
console.log(grade12);

var indexOfStephanie = grade12.indexOf("Stephanie");
console.log(indexOfStephanie);
grade12.splice(indexOfStephanie,1);
console.log(grade12);
grade12.push("Jae");
console.log(grade12);



var totalGrade = grade10.concat(grade11);
console.log(totalGrade);
var totalGradeAll = totalGrade.concat(grade12)

var totalGrade = grade10.concat(grade11, grade12);
console.log(totalGrade);

