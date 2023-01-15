"use strict";

function handleForm(form, credentials) {
    if (form !== null) {
        const formElements = form.elements;

        if (formElements !== null) {
            const formUsername = formElements.namedItem('username');
            const formPassword = formElements.namedItem('password');

            if (credentials.username === formUsername.value && credentials.password === formPassword.value) {
                return true;
            }
        }
    }

    return false;
}

const formElement = document.forms.namedItem('login-form');
const data = {
    username: 'administrator',
    password: 'administrator'
}

formElement.onsubmit = () => {
    if (handleForm(formElement, data)) {
        window.alert('giriş yaptınız');
    } else {
        window.alert('giriş yapılamadı');
    }
}

