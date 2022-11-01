/*jshint esversion: 6 */

//scroll effect for name
/*
window.addEventListener('scroll', function(){
    let brandon = document.getElementById('name');
    let value = window.scrollY;
    brandon.style.top = value * 0.5 + 'px';

});
*/


//form submission 
document.getElementById("submit-button").onclick = function () {
    window.alert("You'll be redirected to your email account. Thank you for sending me an email. I'll be in contact shortly!");
};

function revealItem(){
    const reveals = document.querySelector(".reveal");

}

window.alert("This is Website is a Work-Progress, Subject to Change");

let stars = document.getElementById('stars');
let cloud = document.getElementById('cloud');

//moving image 
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.marginTop = value * 0.5 + 'px';
    cloud.style.marginTop = value * -0.10 + 'px';

});


//title change
document.getElementById('title').addEventListener('mouseover', function titleOver (){
    const job = document.getElementById('title');
    job.innerHTML = "Babson College Student";
    job.style.color = "green";
});

document.getElementById('title').addEventListener('mouseout', function titleOver (){
    const job = document.getElementById('title');
    job.innerHTML = "Product Manager";
    job.style.color = "rgb(197, 197, 197)";
});
