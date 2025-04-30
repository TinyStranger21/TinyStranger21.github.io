const changebtn = document.querySelector('#backgroundChange');
changebtn.addEventListener('click', changingBackground);
const nav = document.querySelector('nav');
const navA = document.querySelector('nav a');

// const colors = ["Black", "White"];
const colors = ["black", "#247BA0", "#FF1654", "#2D232E", "#9E8FB2", "#F08700", "#64A6BD", "#387780", "#42113C", "#590004", "#B48EAE"]

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }
 
// var backColor = randomValueFromArray(colors)


function changeBackground(bgcolor) {
    nav.style.backgroundColor = bgcolor;
} 

// function changeText(bgcolor) {
//     navA.style.color = bgcolor;
// }


function changingBackground() {
    var backgroundC = randomValueFromArray(colors);
    changeBackground(backgroundC); // just calling the set we have in the script but not calling a new one everytime
}


changingBackground();

// function display(element){
//     const photo = document.querySelector(".portImg");
//     document.photo.innerHTML = element.alt;
// }
// function revert(){
//     const photo = document.querySelector(".portImg");
//     document.photo.innerHTML = "Hover over a sunsign image to display details.";
// }