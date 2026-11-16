/*
Q3. Number Pattern

Write a program to print the following pattern using nested loops:

1
12
123
1234
12345
123456
*/

for (let i = 1; i <= 6; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}