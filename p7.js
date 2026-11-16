/*
Q7. Perfect Numbers

Write a program to find all perfect numbers
between 1 and 1000.

Example:
6 = 1 + 2 + 3
6 is a perfect number.
*/

for (let i = 1; i <= 1000; i++) {
    let sum = 0;

    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            sum += j;
        }
    }

    if (sum === i) {
        console.log(i);
    }
}