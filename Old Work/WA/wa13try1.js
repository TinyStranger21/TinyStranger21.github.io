

// function check() {
//     console.log('test');
// }

// function submit() {
//     alert("Your volume is now:" + output.textContent);
// }

// function reset() {
//     outputInt = 0;
//     output.textContent = outputInt;
// }

// function minus() {
//     if (outputInt > 0) {
//     outputInt -=1;
//     output.textContent = outputInt; }
    
// }

// function plus() {
//     if (outputInt < 100) {
//     outputInt +=1;
//     output.textContent = outputInt;
//     }
// }

// function random() {
//     outputInt = randomNumber(0, 100);
//     output.textContent = outputInt;
// }

// function randomNumber(min, max) {
//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
//     return num;
//   }



// const output = document.querySelector('.output');
// let outputInt = parseInt(output.textContent);
// console.log(outputInt);

// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
// const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
// const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// var slider = document.getElementById("myRange");
// var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
// var sliderOutput = document.querySelector(".slider-output");


// // Update the current slider value (each time you drag the slider handle)
// function update() {
//     sliderOutput.textContent = slider.value;
// }

let body = document.querySelector("body");
let content = document.querySelector("#content");
let volume = document.querySelector("#volume");

// Slider box tracking JavaScript
// currently 15 colors
const colors = ["#00BBF9", "#FFA9A3", "Yellow", "Orange", "#00F5D4", "Pink", "#E7D7C1", "#CEFF1A", "#B9E6FF", "#7EB77F", "Black", "#59A96A", "#9BDEAC", "#A9F8FB", "#FF4365"];
console.log(colors.length);
console.log(570/colors.length);
// 38*15=570
function myFunction() {
    const element = document.getElementById("myDIV");
    let x = element.scrollLeft;
    let y = element.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
    
    // console.log(numIndexer(x))
    colorChanger(numIndexer(x));
    boxChanger(numIndexer(y));
    // volume()
    addition(x);
    addition(y);
    subtraction(x);
    subtraction(y);
    division(x);
    division(y);

    // console.log(x); //x is the value we will assign
    // rgbChanger(x, y);
}

// Need to make a volume number that will change depending on the other functions
function volume(value) {
    volume.textContent = `Volume: ${value}`;
}

// getattribute

function numIndexer(x) {
    let ind = Math.floor(x / 38);
    return ind;
}

// could use switch statements
// Could also change the value of an rgb when the x and y values change ----- rgb (x,y,x+y)!!!!!!!!!!!!!!!!!!!!!!!!!!
// maybe I could divide the thing by 15 and then set a color to each individual value like 1, 2, 3, 4, ...
// Box 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function colorChanger(numInd) {
    body.style.backgroundColor = colors[numInd]; // This should change as 
}

function boxChanger(numInd) {
    content.style.backgroundColor = colors[numInd];
}
 
// seconnd idea
// function rgbChanger(x, y) {
//     body.style.backgroundColor = rgb(x, y, x+y/2);
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function addition(n) {
    if (value <= 100) {
        value += n;
        return value;
    }
}

function subtraction(n) { // we could also put x and y in here
    if (value <= 100) {
        value -= n;
        return value;
    }
}

function division(n) {
    if (value <= 100) {
        value /= n;
        return value;
    }
}

function backChanger() {

}

// make a scroll that if you hit 50 it automatically restarts the page and the volume
