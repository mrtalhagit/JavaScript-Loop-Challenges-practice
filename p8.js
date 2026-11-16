/*
Q8. Multiplication Table Challenge

Print multiplication tables from 1 to 10.

Conditions:
- Do not print results greater than 50.
- Skip even multiplication results.
- Print only odd results.
*/

for (let i = 1; i <= 10; i++) {
    console.log("Table of " + i);

    for (let j = 1; j <= 10; j++) {
        let result = i * j;

        if (result > 50) {
            continue;
        }

        if (result % 2 === 0) {
            continue;
        }

        console.log(i + " x " + j + " = " + result);
    }
}