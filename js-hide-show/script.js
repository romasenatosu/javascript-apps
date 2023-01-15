let element = document.getElementById('hideShowButton') ?? null;
let target = document.getElementById('target') ?? null;

const ELEMNOTFOUND = 'Eleman bulunamadı';


function toggleTarget() {
    if (target !== null) {
        if (element !== null) {
            target.style.visibility = (element.classList.contains('hide')) ? 'hidden' : 'visible';
            return true;
        }
    }

    return false;
}

if (element !== null) {
    element.addEventListener('click', () => {
        if (element.classList.contains('hide')) {
            if (!toggleTarget()) {
                window.alert(ELEMNOTFOUND);
            }

            element.innerHTML = 'Göster';
            element.classList.remove('hide');
            element.classList.add('show');
        }

        else if (element.classList.contains('show')) {
            if (!toggleTarget()) {
                window.alert(ELEMNOTFOUND);
            }

            element.innerHTML = "Gizle";
            element.classList.remove('show');
            element.classList.add('hide');
        }
    });
} else {
    window.alert(ELEMNOTFOUND);
}
