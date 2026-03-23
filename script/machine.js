console.log('machine added');

// machine id -> input value
function getValueFromInput (id) {
    const input = document.getElementById (id);
    const value = input.value;
    console.log (id, value);
    return value;
}

//machine -> balance
function getBalance () {
    const balanceElement = document.getElementById ('balance');
    const balance = balanceElement.innerText;
    console.log('current balance is :', Number(balance));
    return Number(balance);
}

// machine value -> set balance
function setBalance (value) {
    const balanceElement = document.getElementById ('balance');
    balanceElement.innerText = value;
}

// machine id -> hideAll -> showAll
function showOnly (id) {
    const addMoney = document.getElementById ('add-money');
    const cashout = document.getElementById ('cashout');
    // console.log (`Add-Money: ${addMoney},CashOut: ${cashout}`);

    // hide all section
    addMoney.classList.add ('hidden');
    cashout.classList.add ('hidden');

    // id oala element ta k tmi show koro
    const selected = document.getElementById (id);
    selected.classList.remove ('hidden');
}