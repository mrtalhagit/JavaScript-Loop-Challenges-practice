/*
Q5. Armstrong Numbers

Write a program to find all Armstrong numbers
between 1 and 1000.

Example:
153 = 1³ + 5³ + 3³
*/

for (let i = 1; i <= 1000; i++) {
    let num = i;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }

    if (sum === i) {
        console.log(i);
    }
}