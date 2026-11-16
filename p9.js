/*
Q9. Palindrome Number

Write a program that checks whether a number
is a palindrome without converting it into a string.

Input: 121
Output: Palindrome

Input: 123
Output: Not Palindrome
*/

let num = 121;
let original = num;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if (original === reverse) {
    console.log("Palindrome");
} 
else {
    console.log("Not Palindrome");
}