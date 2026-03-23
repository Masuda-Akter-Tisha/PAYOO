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
        // history container k dhore niye ashte hube
        const historyContainer = document.getElementById ('history-container');
        //create a new div
        const newHistory = document.createElement ('div');
        //add innerHtml in a new div
        newHistory.innerHTML = `
        <div class="transaction-card bg-base-100 p-5 rounded-3xl shadow-sm">
        pay bill successfully from ${bank},tk: ${amount}, at ${new Date()}
        </div>
        `
        // history container ar moddhe new div k append kore dibu
        historyContainer.appendChild (newHistory);
    }
    else {
        alert ('invalid pin');
        return;
    }
})