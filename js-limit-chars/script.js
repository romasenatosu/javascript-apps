"use strict";

let areaElement = document.getElementById('area');
let leftCharElement = document.getElementById('leftChar');

function calcLeftChar(area, element) {
    let len = area.value.length;
    element.innerText = String(255 - len);

}

if (areaElement !== null && leftCharElement !== null) {
    calcLeftChar(areaElement, leftCharElement);

    areaElement.onkeyup = () => {
        calcLeftChar(areaElement, leftCharElement);
    }
}
