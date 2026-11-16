/*
Q2. Prime Numbers

Write a program that prints all prime numbers between 1 and 100.
A prime number is divisible only by 1 and itself.
*/

for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}