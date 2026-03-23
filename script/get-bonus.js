document.getElementById ('get-bonus-btn').addEventListener ('click', function () {
    // get coupon number and verify
    const coupon = getValueFromInput ('get-bonus-coupon');
    const getBonus = 25000;
    const currentBalance = getBalance ();
    const newBalance = getBonus + currentBalance;
    if (coupon === '202230code') {
        alert (`Congratulations!
You get the bonus.`);
             setBalance (newBalance);
             // history container k dhore niye ashte hube
        const historyContainer = document.getElementById ('history-container');
        //create a new div
        const newHistory = document.createElement ('div');
        //add innerHtml in a new div
        newHistory.innerHTML = `
        <div class="transaction-card bg-base-100 p-5 rounded-3xl shadow-sm">
        Congratulations!You get the bonus. at ${new Date()},Your bonus tk is: ${getBonus}.
        </div>
        `
        // history container ar moddhe new div k append kore dibu
        historyContainer.appendChild (newHistory);
    }
    else {
        alert ('Invalid Coupon Number');
    }
})