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
        // history container k dhore niye ashte hube
        const historyContainer = document.getElementById ('history-container');
        //create a new div
        const newHistory = document.createElement ('div');
        //add innerHtml in a new div
        newHistory.innerHTML = `
        <div class="transaction-card bg-base-100 p-5 rounded-3xl shadow-sm">
        Transfer Money successfully from ${accountNumber},cashout: ${sendAmount}tk, at ${new Date()}
        </div>
        `
        // history container ar moddhe new div k append kore dibu
        historyContainer.appendChild (newHistory);
    }
    else {
        alert ('Invalid Pin');
    }
})