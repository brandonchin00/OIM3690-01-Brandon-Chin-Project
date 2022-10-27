
const box = document.querySelector('.box');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        box.style.opacity = 0;
        box.style.display = 'none';

        main.style.display = 'block';
        setTimeout(()=> (main.style.opacity = 1), 50);
    }, 3500);
}

init();