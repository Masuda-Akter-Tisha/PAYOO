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
    }
    else {
        alert ('Invalid Coupon Number');
    }
})