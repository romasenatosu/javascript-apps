"use strict";


let idFormElement = document.forms.namedItem('id-form');


function confirmId(value) {
    // 1, 3, 5, 7 ve 9. hanelerin toplamının 7 katı ile 2, 4, 6 ve 8. hanelerin toplamı çıkartılır,
    // sonucun 10’a bölümünden kalanı 10. haneyi verir.

    let odd = parseInt(value[0]) + parseInt(value[2]) + parseInt(value[4]) + parseInt(value[6]) + parseInt(value[8]);
    let even = parseInt(value[1]) + parseInt(value[3]) + parseInt(value[5]) + parseInt(value[7]);
    odd *= 7;
    let res = Math.abs(odd - even);

    console.log(res);

    return res % 10 === parseInt(value[9]);
}

function confirmLast(value) {
    // İlk 10 hanenin toplamının 10’a bölümünden kalan, son haneyi verir.
    let i = 0, sum = 0;

    for (i; i < 10; i++) {
        sum += parseInt(value[i]);
    }

    return sum % 10 === parseInt(value[10]);
}

if (idFormElement !== null) {
    idFormElement.onsubmit = () => {
        let idInputElement = idFormElement.elements.namedItem('id-no');
        let idInputValue = String(idInputElement.value);
        let len = idInputValue.length;
        let excepts = [
            11111111110,
            22222222220,
            33333333330,
            44444444440,
            55555555550,
            66666666660,
            7777777770,
            88888888880,
            99999999990
        ];

        if (len !== 11) {
            window.alert('T.C 11 haneli olmalıdır!');
            return false;
        }

        else if (isNaN(Number(idInputValue))) {
            window.alert('T.C Sayılardan oluşmalıdır!');
            return false;
        }

        else if (idInputValue.charAt(0) === '0') {
            window.alert('T.C `0` rakamı ile başlayamaz')
            return false;
        }

        else if (!confirmLast(idInputValue)) {
            window.alert("Geçersiz T.C");
            return false;
        }

        else if (!confirmId(idInputValue)) {
            window.alert("Geçersiz T.C");
            return false;
        }

        else if (excepts.toString().indexOf(idInputValue) !== -1) {
            window.alert("Geçersiz T.C");
            return false;
        }

        else {
            window.alert("Geçerli T.C");
            return true;
        }
    }
}
