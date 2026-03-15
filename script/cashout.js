document.getElementById ('cashout-btn').addEventListener ('click', function () {
    // get the agent number
    const cashoutNumber = getValueFromInput ('cashout-number');

    if (cashoutNumber.length !== 11) {
        alert ('Invalid Cashout Number');
        return;
    }

    //get the amount 
    const cashoutAmount = getValueFromInput ('cashout-amount');

    // get the current balance
    const currentBalance = getBalance ();
    console.log(currentBalance);
    // new balance calculate
    const newBalance = currentBalance - Number (cashoutAmount);
    if (newBalance < 0) {
        alert ('Invalid Amount');
        return;
    }

    //get the pin number
    const pin = getValueFromInput ('cashout-pin');
    if (pin === '1234') {
        alert ('Cashout successful');
        document.getElementById ('balance').innerText = newBalance;
    }
    else {
        alert ('Invalid pin');
        return;
    }
})
// document.getElementById ('cashout-btn').addEventListener ('click', function () {
//     // 1- get the agent number and validate
//     const cashoutNumberInput = document.getElementById ('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if (cashoutNumber.length !== 11) {
//         alert ('cashoutNumber Invalid');
//         return;
//     }

//     // 2- get the amount and validate and convert to number
//     const cashoutAmountInput = document.getElementById ('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3- get the Current balance and validate and convert to number
//     const balanceElement = document.getElementById ('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//     // 4- Calculate new balance
//     const newBalance = Number(balance) - Number(cashoutAmount); 
//     if (newBalance < 0) {
//         alert ('Invalid Amount');
//         return;
//     }

//     // 5- get the pin and verify
//     const cashoutPinInput = document.getElementById ('cashout-pin');
//     const pin = cashoutPinInput.value;
//     console.log(pin);
//     if (pin === '1234') {
//         // 6- true:::>>> show an alert and set balance
//         alert ('cashout successful');
//         console.log('new balance is :', newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else {
//         // 7- false :::>>> show an error and return
//         alert ('Invalid Pin');
//         return;
//     }
// })