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

let stars = document.getElementById('stars');
let cloud = document.getElementById('cloud');

//moving image 
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.marginTop = value * 0.5 + 'px';
    cloud.style.marginTop = value * -0.10 + 'px';

});

window.addEventListener("load", () => {
    word();
});

//title change
document.getElementById('title').addEventListener('mouseover', function titleOver (){
    const job = document.getElementById('title');
    job.innerHTML = "Babson College";
    job.style.color = "green";
    job.style.font = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
});

document.getElementById('title').addEventListener('mouseout', function titleOver (){
    const job = document.getElementById('title');
    job.innerHTML = "Business School";
    job.style.color = "white";
    job.style.font = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
});

window.addEventListener("scroll", () => {
    running();
});


function running() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("move").style.width = scrolled + "%";
  }

function word(){
    let typed = new Typed(".auto-input", {
        strings: ["Brandon Chin", "a Product Manager", "a Student Developer", "a Swim Instructor"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });
}