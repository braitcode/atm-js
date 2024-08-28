console.log("Hello PB")

var day = "Monday";
console.log(day)

const myAge = 28;
console.log(myAge)

const str = 'str'
console.log(str)

const PB = {
    firstName: "Bright",
    lastName: "Okhumale"
}
const firstName = PB.firstName
const lastName = PB.lastName
const fullName = firstName + " " + lastName
console.log("Full Name:", fullName);



// Task
// let myInput = prompt("Enter Username or PIN")
// console.log("myInput")
let loginPin = myInput.toLowerCase();
// console.log(myInput, loginPin);

let accName = "Brait";
let atmPIN = "12345";
let deposit = "deposit";
let withdraw = "withdraw";
let checkbalance = "balance";
let myAccBal = 10000

const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPIN;
console.log(isAuth)

if(isAuth){
    console.log("Welcome to Tech Studio Bank")
    let transaction = prompt("What would you like to do today?").toLowerCase()

    switch(transaction){
        case deposit:
            console.log("Deposit");
            let depAmt = Number(prompt("Enter amount to deposit"))
            console.log(depAmt);
            myAccBal += depAmt // myAccBal = myAccBal + depAmt;
            console.log(`Your new account balance is $${myAccBal}`);
            break;
        case withdraw:
            console.log("Withdraw");
            let witAmt = Number(prompt("Enter amount to withdraw"))
            console.log(witAmt);
            myAccBal -= witAmt
            console.log(`Your new account balance is $${myAccBal}`);
            if(witAmt > myAccBal){
                console.log("Insufficient Balance");
            }
        case checkbalance:
            console.log(`Your account balance is $${myAccBal}`);
            break;
        default:
            console.log("Invalid transaction");
    }

}else{
    console.log("Wrong PIN or Username")
}

let pass = "password12345"
if(isLoggedIn && pass.length < 8 && pass.includes(2)){
    console.log("Weak password")
}