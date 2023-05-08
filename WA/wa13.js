// New Idea: I am going to make a small box with a huge scroll amount and have a random position generator for each number of volume 1-100. 
// To do that part we will add an append that will append or createElement--for i in range(100), adding to a div we have in the html.

const body = document.querySelector("body");
const content = document.querySelector("#content");
// let volume = document.querySelector("#volume");
const numbers = document.querySelector("#numbers");
// const myDiv = document.querySelector("#myDiv");

// Slider box tracking JavaScript
// currently 15 colors
const colors = ["#00BBF9", "#FFA9A3", "Yellow", "Orange", "#00F5D4", "Pink", "#E7D7C1", "#CEFF1A", "#B9E6FF", "#7EB77F", "Black", "#59A96A", "#9BDEAC", "#A9F8FB", "#FF4365"];
console.log(colors.length);
console.log(3788/colors.length);
// 38*15=570
function myFunction() {
    const element = document.getElementById("myDiv");
    let x = element.scrollLeft;
    let y = element.scrollTop;
    document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
    
    // console.log(numIndexer(x))
    colorChanger(numIndexer(x));
    boxChanger(numIndexer(y));
    // volume()
    // console.log(x); //x is the value we will assign
    // rgbChanger(x, y);
  
    // createParagraph();

    // console.log()
    
}

// Need to make a volume number that will change depending on the other functions
// function volume(value) {
//     volume.textContent = `Volume: ${value}`;
// }

// getattribute
// Box 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function numIndexer(x) {
    let ind = Math.floor(x / 252);
    return ind;
}
// Could also change the value of an rgb when the x and y values change ----- rgb (x,y,x+y)!!!!!!!!!!!!!!!!!!!!!!!!!!
// maybe I could divide the thing by 15 and then set a color to each individual value like 1, 2, 3, 4, ...

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

function createButton() {
    for (i=0; i<=100; i++) {

        // const btn = document.querySelector("#numbers");

        const btn = document.createElement("button");
        btn.textContent = i;
        btn.classList.add("numb");
        document.getElementById("myDiv").appendChild(btn);
        // randomPos();
        btn.style.top = randomPos() + "px"; 
        btn.style.left = randomPos() + "px";
        // btn.addEventListener('click', volumeChange); // Bring volume change function into our addEventListener 
        btn.addEventListener('click', () => {
            const volume = document.querySelector("#volume");
            volume.textContent = `Volume: ${event.target.textContent}`;// btn.textContent;
            console.log(volume); 
        })

    }
}

// function volumeChange() {
//     const volume = document.querySelector("#volume");
//     volume.textContent = "Volume: " + event.target.textContent;// btn.textContent;
//     console.log(volume); 
// }

function randomPos() {
    const random = Math.floor(Math.random()*3940);
    return random; 
}
console.log(createButton());

// const numButton = document.querySelector('.num-button').addEventListener('click', "A function that gives the value of the number to the volume");

// numbers.style.top = randomPos(); // Assigning a random number amount to a makeshift x and y axis
// numbers.style.left = randomPos();

// for (i=0; i<=100; i++) {
//     randomPos();
//     // console.log(randomPos());
// }

// make a scroll that if you hit 50 it automatically restarts the page and the volume

// Here is what I am trying to do:
// I am trying to generate a bunch of buttons using javascript that are each a number from 1-100
// Each of these buttons will also have a random position value assigned to it.
// My problem currently is figuring out how to add a bunch of buttons to my html with the slider box.
