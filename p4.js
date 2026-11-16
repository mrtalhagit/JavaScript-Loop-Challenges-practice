/*
Q4. Reverse Number

Write a program that reverses a given number
without converting it into a string.

Input: 58321
Output: 12385
*/

let num = 58321;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log(reverse);