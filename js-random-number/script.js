let num = document.getElementById('number');

function generate(a, b) {
    if (num !== null) {
        let number = Math.floor(Math.random() * (b - a + 1)) + a;
        let str_number = String(number);
        if (number < 10 && number > 0) {
            str_number = '0'.concat(str_number);
        }

        num.innerText = str_number;
    }
}
