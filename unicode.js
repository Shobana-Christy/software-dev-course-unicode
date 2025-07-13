/*

Practice Problem #1

Exercise 1: Retrieve and Add Two Code Points
Objective: Extract the Unicode code points of the first two characters of a string,
add them together, and return the result.

Instructions:
Write a program that takes a string with at least two characters.
Use charCodeAt to get the Unicode code points of the first two characters.
Add the two code points together and assign the result to a variable named sumCodePoints.
Input:*/
 let inputStr = "Hi";
 let  numStringOne = inputStr.charCodeAt(0);
 console.log(numStringOne);

 let numStringTwo = inputStr.charCodeAt(1);
 console.log(numStringTwo);
 let sumCodePoints = numStringOne + numStringTwo;
 console.log(sumCodePoints);

/* Expected Output:
// sumCodePoints: 177 // 'H' = 72, 'i' = 105, 72 + 105 = 177
//*****************************************************************
// Exercise 2: Generate a String from Two Code Points
// Objective: Take two numeric Unicode code points,
// convert them to characters using String.fromCharCode,
// and combine them into a single string.

// Instructions:
// Write a program that accepts two numeric Unicode code points.
// Use String.fromCharCode to convert each code point to its corresponding character.
// Combine the two characters into a single string and assign it to a variable named combinedString.
*/
let codePoint1 = 65;
console.log(codePoint1);
let codePoint2 = 66;
console.log(codePoint2);
let combinedString = String.fromCharCode(codePoint1) + String.fromCharCode(codePoint2);
console.log(combinedString);


/* Expected Output:
 combinedString: "AB" // 65 = 'A', 66 = 'B', combined = "AB"
 ********************************************************************
 Exercise 3: Find the Character Difference
 Objective: Extract the Unicode code points of two given characters from a string
 and calculate the absolute difference between them.

 Instructions:
 Write a program that takes a string with at least two characters and two specified indices.
 Use charCodeAt to find the Unicode code points of the characters at the specified indices.
 Calculate the absolute difference between the two code points and assign it to a variable named codePointDifference.
*/

let inputString = "Cat";
let index1 = 0;
let index2 = 2;
let charIndexed = Math.abs(inputString.charCodeAt(index1) - inputString.charCodeAt(index2));
console.log(charIndexed);

// Expected Output:
// codePointDifference: 16 // 'C' = 67, 't' = 116, |67 - 116| = 16


// 
/*
Tasks:
Task 1: Extract Code Points from Characters
Take the string "Code".
Use charCodeAt to extract the Unicode code points of the first and third characters.
Assign the results to variables named firstCodePoint and thirdCodePoint.

Task 2: Create a Word from Code Points
Use the Unicode code points 72, 101, 108, and 108 (corresponding to the characters H, e, l, and l).
Use String.fromCharCode to create the word "Hell".
Assign the result to a variable named wordFromCodePoints.

Task 3: Swap First and Last Characters
Take the string "Launch".
Extract the Unicode code points of the first and last characters using charCodeAt.
Use String.fromCharCode to swap these characters and create a new string: "hauncL".
Assign the result to a variable named swappedString.

*/

//Starter Code
// Task 1
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); // Your code here
console.log(firstCodePoint);
let thirdCodePoint = inputString1.charCodeAt(3); // Your code here
console.log(thirdCodePoint);

// Task 2th
let code  = [72, 101, 108, 108]; 
let wordFromCodePoints = String.fromCharCode(code[0]) + String.fromCharCode(code[1]) +
                          String.fromCharCode(code[2]) + String.fromCharCode(code[3]);
console.log(wordFromCodePoints);
// Your code here

// Task 3
let inputString2 = "Launch";
let firstChar = inputString2.charCodeAt(0)
console.log(firstChar)
let lastChar = inputString2.charCodeAt(inputString2.length-1);
console.log(lastChar);
//let example = inputString2.replace("L","h");//
let charStrOne = String.fromCharCode(firstChar); 
console.log(charStrOne);
let charStrTwo = String.fromCharCode(lastChar);
console.log(charStrTwo);

 let swapStrOne = inputString2.replace(charStrTwo,"x");
 console.log(swapStrOne);

 let swapStrTwo = swapStrOne.replace(charStrOne,charStrTwo); 
 console.log(swapStrTwo);  
 // Your code here
let swappedString = swapStrTwo.replace("x",charStrOne);
console.log(swappedString);

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
