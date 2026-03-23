document.getElementById ('send-money-btn').addEventListener ('click', function () {
    // get account and validation
    const accountNumber = getValueFromInput ('send-money-number');
    if (accountNumber.length !== 11) {
        alert('Invalid User Account Number');
        return;
    }

    // get amount and validation
    const sendAmount = getValueFromInput ('send-money-amount');
    const currentBalance = getBalance ();
    const newBalance = currentBalance - Number (sendAmount);
    if (newBalance < 0) {
        alert ('Invalid Amount');
        return;
    }

    // get pin and verify
    const pin = getValueFromInput ('send-money-pin');
    if (pin === '1234') {
        alert (`Transfer money successfully.${new Date ()}`);
        setBalance (newBalance);
    }
    else {
        alert ('Invalid Pin');
    }
})