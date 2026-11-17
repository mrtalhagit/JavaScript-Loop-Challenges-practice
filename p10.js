/*
Q10. ATM Simulation

Create a simple ATM simulation using loops and if-else.

Initial balance = 10,000.

Menu:
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit

Conditions:
- Deposit must be greater than zero.
- Withdrawal cannot exceed available balance.
- Withdrawal must be a multiple of 500.
- Continue until the user selects Exit.
*/

let balance = 10000;
let choice = 1;

do {
    console.log("\nATM MENU");
    console.log("1. Check Balance");
    console.log("2. Deposit Money");
    console.log("3. Withdraw Money");
    console.log("4. Exit");

    if (choice === 1) {
        console.log("Your Balance is: " + balance);
    }

    else if (choice === 2) {
        let deposit = 2000;

        if (deposit > 0) {
            balance += deposit;
            console.log("Deposit Successful!");
            console.log("New Balance: " + balance);
        }
        else {
            console.log("Invalid Deposit Amount!");
        }
    }

    else if (choice === 3) {
        let withdraw = 1500;

        if (withdraw <= 0) {
            console.log("Invalid Withdrawal Amount!");
        }
        else if (withdraw % 500 !== 0) {
            console.log("Amount must be a multiple of 500!");
        }
        else if (withdraw > balance) {
            console.log("Insufficient Balance!");
        }
        else {
            balance -= withdraw;
            console.log("Withdrawal Successful!");
            console.log("Remaining Balance: " + balance);
        }
    }

    else if (choice === 4) {
        console.log("Thank you for using our ATM!");
    }

    else {
        console.log("Invalid Choice!");
    }

    choice++;

} while (choice !== 5);