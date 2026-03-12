console.log('coming login functionality!')

document.getElementById ('login-btn').addEventListener ('click', function () {
    // 1- get the mobile number input
    const inputNumber = document.getElementById ('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber);
    // 2- get the pin input
    const inputPin = document.getElementById ('input-pin');
    const pinNumber = inputPin.value;
    console.log(pinNumber);
    // 3- match number and pin input
    if (contactNumber === '01720223011' && pinNumber === '1234') {
        // 3.1 true:::>> alert > homepage
        alert ('login successful');

        // window.location.replace ('/home.html');
        window.location.assign ('/home.html');
    }
    else {
        //3.2 false :::>> alert > return
        alert ('login failed');
    }
})