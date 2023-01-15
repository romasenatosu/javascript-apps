let element = document.getElementById('redirect');
const target = "https://www.google.com.tr/";

function redirect(sec) {
    if (sec === 0) {
        location.href = target;
        return true;
    }

    if (element !== null) {
        element.innerText = `${sec} Saniye sonra yönlendiriliyorsunuz...`;
    }

    sec -= 1;

    setTimeout(() => {
        redirect(sec);

    }, 1000);
}

redirect(5);
