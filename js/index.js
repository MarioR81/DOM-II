// Your code goes here

// 1
let headerColor = document.querySelector('.logo-heading');
headerColor.addEventListener('dblclick', () => {headerColor.style.color = 'blue'; });

// 2 & 3
let headerBgd = document.querySelector('.main-navigation');
headerBgd.addEventListener("mouseenter", () => {headerBgd.style.backgroundColor = "purple"; });
headerBgd.addEventListener("mouseleave", () => {headerBgd.style.backgroundColor = "white"; });

// 4
let busImg = document.querySelector('.bus-img');
busImg.addEventListener('click', () => {
    busImg.style.transform = 'scale(1.12)';
    busImg.style.transition = 'transform 0.5s';
 });

// 5
const switchImg = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    switchImg.src = 'img/concert.jpg';
});


// 6 & 7

let foot = document.querySelector('.footer');
foot.addEventListener("mousedown", () => {foot.style.backgroundColor = "pink"; });

foot.addEventListener("mouseup", () => {foot.style.backgroundColor = "grey"; });

// 8
let textRed = document.querySelector('.content-destination h2');
textRed.addEventListener('contextmenu', () => {textRed.style.color = 'red';});

// 9
let backOrange = document.querySelector('body');
backOrange.addEventListener('wheel', () => {backOrange.style.backgroundColor = 'orange'});

// 10
let copytest = document.querySelector('.footer p');
window.addEventListener('keydown', () => {copytest.textContent = 'Open Soource';});


// stop Propagation
const buttonX = document.querySelector('.btn');
buttonX.addEventListener('click', (e) => {
    buttonX.textContent = 'X';
    e.stopPropagation();
});
const backPink = document.querySelector('.content-pick');
backPink.addEventListener('click', () => {backPink.style.backgroundColor = 'pink' ;});




// prevent default
const stopLink = document.querySelector('a');
stopLink.addEventListener('click', (e) => {e.preventDefault();});