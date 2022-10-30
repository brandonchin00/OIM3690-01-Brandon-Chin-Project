
/*jshint esversion: 6 */

//loader 
function init() {
    const box = document.querySelector('.box');
    const main = document.querySelector('.content');

    setTimeout(() => {
    box.style.opacity = 0;
    box.style.display = 'none';

    main.style.display = 'block';
    //setTimeout(code, delay)
    setTimeout(() => (main.style.opacity = 1), 50);
    }, 3000);
}

init();

/* testing something
function hovering() {
    const a = document.getElementById("a");
    const b = document.getElementById("b");
    const c = document.getElementById("c");
    const d = document.getElementById("d");
    const e = document.getElementById("e");
    const f = document.getElementById("f");

    let arrays = [a, b, c, d, e, f];
    for (const i in arrays) {
        i.addEventListener('mouseover', function() {
            i.style.color = 'white';
        });
        i.addEventListener('mouseout', function() {
            i.style.color = 'grey';
        });
    
    }
    
}

function checker(x) {
    if (addEventListener('mouseover')){
        x.style.color = 'white';
    } else {
        x.style.color = 'grey';
    }
}
*/
