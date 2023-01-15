"use strict";

// get required elements
const resultElement = document.getElementById('result') ?? null;
const buttons = document.getElementsByTagName('button') ?? null;

function checkChars(resultValues) {
    const validChars = '7894561230+-/*=.';
    let i = 0;
    let len = resultValues.length;

    for (i; i < len; i++) {
        if (!(resultValues[i] in validChars)) {
            return false;
        }
    }

    return true;
}

function calc(button, resElem) {
    button.onclick = () => {
        let elemValue = resElem.value;

        // if result screen is empty then fill it with 0 otherwise add numbers clicked
        if (String(elemValue) === '0') {
            resElem.value = button.innerText;
        } else {
            // check if button '=' is pressed
            if (button.innerText === '=') {
                if (checkChars(elemValue.length)) {
                    try {
                        resElem.value = eval(resElem.value);
                    } catch (e) {
                        window.alert(e.toString());
                    }
                } else {
                    window.alert('Geçersiz karakter bulundu!');
                }
            } else {
                resElem.value += button.innerText;
            }
        }
    }
}

if (resultElement !== null) {
    // start listeners for result screen
    resultElement.onkeyup = (event) => {
        event.preventDefault();
    }

    resultElement.onkeydown = (event) => {
        event.preventDefault();
    }

    // start button listeners and calculate values
    if (buttons !== null) {
        let i = 0;
        let btnCount = buttons.length;
        resultElement.value = 0;

        for (i; i < btnCount; i++) {
            calc(buttons[i], resultElement);
        }
    }
}
