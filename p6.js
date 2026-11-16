/*
Q6. Student Result System

There are 10 students. Take marks for each student.

Grades:
90–100: A+
80–89: A
70–79: B
60–69: C
50–59: D
Below 50: Fail

Display:
- Total passed students
- Total failed students
- Highest marks
- Average marks
*/

let passed = 0;
let failed = 0;
let highest = 0;
let total = 0;

let marks = [95, 85, 76, 65, 55, 42, 91, 80, 38, 72];

for (let i = 0; i < 10; i++) {

    total += marks[i];

    if (marks[i] > highest) {
        highest = marks[i];
    }

    if (marks[i] >= 90 && marks[i] <= 100) {
        console.log("Student " + (i + 1) + ": Grade A+");
        passed++;
    }
    else if (marks[i] >= 80) {
        console.log("Student " + (i + 1) + ": Grade A");
        passed++;
    }
    else if (marks[i] >= 70) {
        console.log("Student " + (i + 1) + ": Grade B");
        passed++;
    }
    else if (marks[i] >= 60) {
        console.log("Student " + (i + 1) + ": Grade C");
        passed++;
    }
    else if (marks[i] >= 50) {
        console.log("Student " + (i + 1) + ": Grade D");
        passed++;
    }
    else {
        console.log("Student " + (i + 1) + ": Fail");
        failed++;
    }
}

let average = total / 10;

console.log("Total Passed: " + passed);
console.log("Total Failed: " + failed);
console.log("Highest Marks: " + highest);
console.log("Average Marks: " + average);