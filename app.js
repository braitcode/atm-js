// Task
// let myInput = prompt("Enter Username or PIN");
let loginPin = myInput.toLowerCase();

let accName = "Brait";
let atmPIN = "12345";
let deposit = "deposit";
let withdraw = "withdraw";
let checkbalance = "balance";
let transfer = "transfer";
let myAccBal = 10000;

const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPIN;

if (isAuth) {
    alert("Welcome to Tech Studio Bank");

    let continueTransaction = true;

    while (continueTransaction) {
        let transaction = prompt("What would you like to do today? (deposit, withdraw, balance, transfer)").toLowerCase();

        switch (transaction) {
            case deposit:
                let depAmt = Number(prompt("Enter amount to deposit"));
                if (isNaN(depAmt) || depAmt <= 0) {
                    alert("Invalid deposit amount.");
                } else {
                    myAccBal += depAmt;
                    alert(`Deposit successful! Your new account balance is $${myAccBal}`);
                }
                break;

            case withdraw:
                let witAmt = Number(prompt("Enter amount to withdraw"));
                if (isNaN(witAmt) || witAmt <= 0) {
                    alert("Invalid withdrawal amount.");
                } else if (witAmt > myAccBal) {
                    alert("Insufficient balance. Please try a smaller amount.");
                } else {
                    myAccBal -= witAmt;
                    alert(`Withdrawal successful! Your new account balance is $${myAccBal}`);
                }
                break;

            case checkbalance:
                alert(`Your account balance is $${myAccBal}`);
                break;

            case transfer:
                let recipient = prompt("Enter the recipient's account name");
                let transferAmt = Number(prompt("Enter amount to transfer"));
                if (isNaN(transferAmt) || transferAmt <= 0) {
                    alert("Invalid transfer amount.");
                } else if (transferAmt > myAccBal) {
                    alert("Insufficient balance. Please try a smaller amount.");
                } else {
                    myAccBal -= transferAmt;
                    alert(`Transfer successful! You transferred $${transferAmt} to ${recipient}. Your new account balance is $${myAccBal}`);
                }
                break;

            default:
                alert("Invalid transaction type. Please enter deposit, withdraw, balance, or transfer.");
        }

        // Ask the user if they want to perform another transaction
        let anotherTransaction = prompt("Do you want to perform another transaction? (yes/no)").toLowerCase();
        if (anotherTransaction !== 'yes') {
            continueTransaction = false;
            alert("Thank you for using Tech Studio Bank. Goodbye!");
        }
    }
} else {
    alert("Wrong PIN or Username");
}
