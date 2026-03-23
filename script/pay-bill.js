document.getElementById ('pay-bill-btn').addEventListener ('click', function () {
    // get account
    const bank = getValueFromInput ('pay-bill-bank');
    if (bank === 'Select bank') {
        alert ('please select a Bank');
        return;
    }

    // get account number 
    const accountNumber = getValueFromInput ('pay-bill-account');
    if (accountNumber.length !== 11) {
        alert ('Invalid Account Number');
        return;
    }

    // get Amount
    const amount = getValueFromInput ('pay-bill-amount');
    const currentBalance = getBalance ();
    const newBalance = currentBalance - Number (amount);
    if (newBalance < 0) {
        alert ('Invalid Amount');
        return;
    }

    // get pin
    const pin = getValueFromInput ('pay-bill-pin');
    if (pin === '1234') {
        alert ('Pay bill successfully');
        setBalance (newBalance);
    }
    else {
        alert ('invalid pin');
        return;
    }
})