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
        // history container k dhore niye ashte hube
        const historyContainer = document.getElementById ('history-container');
        //create a new div
        const newHistory = document.createElement ('div');
        //add innerHtml in a new div
        newHistory.innerHTML = `
        <div class="transaction-card bg-base-100 p-5 rounded-3xl shadow-sm">
        Add Money Successful from ${bankAccount},Account No: ${accountNumber},Tk: ${addAmount} at ${new Date()}
        </div>
        `
        // history container ar moddhe new div k append kore dibu
        historyContainer.appendChild (newHistory);
    }
    else {
        alert ('Invalid pin');
        return;
    }
})