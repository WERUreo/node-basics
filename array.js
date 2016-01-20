var grades = [100, 50, 75, 97];
grades.push(89);

// grades.push(val) adds new value to the back of the array
// grades.pop() returns last value of the array and removes it from the array

// grades.unshift(val) adds new value to the front of the array
// grades.shift() returns first value of the array and removes it from the array

// totalGrade = 0
var totalGrade = 0;

// forEach -> add grade to totalGrade

grades.forEach(function(grade)
{
   totalGrade += grade;
   console.log("Current total is " + totalGrade);
});

console.log("Average is " + (totalGrade / grades.length));