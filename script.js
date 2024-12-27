let in1 = document.getElementById('intro');

function changePosition() {
    if (screen.width < 768) {
        in1.style.position = 'static';
    }
    else {
        in1.style.position = 'fixed';
    }
}
changePosition();