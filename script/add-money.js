console.log ('add-money implemented');

document.getElementById ('add-money-btn').addEventListener ('click', function () {
    // 1- get bank account 
    const bankAccount = getValueFromInput ('add-money-bank');
    if (bankAccount === 'Select bank') {
        alert ('please select a bank');
        return;
    }

    // 2- get bank account number
    const accountNumber = getValueFromInput ('add-money-account');
    if (accountNumber.length !== 11) {
        alert ('Invalid Account Number');
        return;
    }

    // 3- get Amount
    const addAmount = getValueFromInput ('add-money-amount');
    const currentBalance = getBalance ();
    const newBalance = currentBalance + Number(addAmount);
    console.log (newBalance);

    // 4- get the pin & set balance
    const pin = getValueFromInput ('add-money-pin');
    if (pin === '1234') {
        alert (`Add Money Successful from ${bankAccount} at ${new Date()}`);
        setBalance (newBalance);
    }
    else {
        alert ('Invalid pin');
        return;
    }
})