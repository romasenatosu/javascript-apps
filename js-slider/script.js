let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

function disableButton(button) {
    button.disabled = true;
    button.style.color='gray';
}

function enableButton(button) {
    button.disabled = false;
    button.style.color='blue';
}

if (prevBtn !== null && nextBtn !== null) {
    let sliderItems = document.getElementsByClassName('slider-item');
    let currentIndex = 0;
    disableButton(prevBtn);

    prevBtn.onclick = () => {
        enableButton(nextBtn);

        currentIndex--;
        if (currentIndex <= 0) {
            disableButton(prevBtn);
        }

        sliderItems[currentIndex+1].style.visibility = 'hidden';
        sliderItems[currentIndex].style.visibility = 'visible';
    }

    nextBtn.onclick = () => {
        enableButton(prevBtn);

        currentIndex++;
        if (currentIndex >= 2) {
            disableButton(nextBtn);
        }

        sliderItems[currentIndex-1].style.visibility = 'hidden';
        sliderItems[currentIndex].style.visibility = 'visible';
    }
}
