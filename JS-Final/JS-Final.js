// restart button idea: if press start on title page, start the function. Else press restart button, start the function.

// Start Section !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Start screen with start button, customize and ball selector button, and a settings menu.
const start = document.querySelector('.start');
const startButton = document.querySelector('#startButton');
const customizeButton = document.querySelector('#customizeButton');
// const body = document.querySelector('body');
startButton.addEventListener('click', gameStart);
customizeButton.addEventListener('click', customStart);


const customizePage = document.querySelector('.customize');
const backButton = document.querySelector('#back');
const colors = document.querySelector('#colors');
const ballColorsChoice = ["Aqua", "Blue", "Yellow", "Orange", "Red", "Green", "lime", "lightseagreen", "pink", "purple"];
const bgColorChoice = ["black", "#247BA0", "#3C5A14", "#2D232E", "#9E8FB2", "#64A6BD", "#387780", "#42113C", "#590004", "#175680"]; // Edit these
const ballColorsGrid = document.querySelector('#ballColorsGrid');
const bgColorsGrid = document.querySelector('#bgColorsGrid');
backButton.addEventListener('click', goBack);
// colors.addEventListener('click', changeColor);


const mainGame = document.querySelector('.mainGame');
const ballsButton = document.querySelector('#ballsBut');
const count = document.querySelector('.three21');
const gameScore = document.querySelector('#score');
const timer = document.querySelector('#timer');
const addedTime = document.querySelector('#addedTime');

const end = document.querySelector('.end');
const finalScore = document.querySelector('#endScore');
const home = document.querySelector('#homeReturn');
const restart = document.querySelector('#restart');
home.addEventListener('click', homeGo);
restart.addEventListener('click', restartGo);

//start
function gameStart() {
    start.style.display = "none";
    // console.log("Clicked");
    // console.log("gone");
    mainGame.style.display = "block";
    // setTimeout(endRound, 10000);
    time(10, 0);
    // countDown();
}

// Customize Section!!!!!!!!!!!!!!!!!!!!!!!1
function customStart() {
    start.style.display = "none";
    customizePage.style.display = "block";
    // colorGridMaker(); /// maybe add a counter to this so it only goes once.
}

function goBack() {
    customizePage.style.display = "none";
    start.style.display = "block";
}

// function changeColor() {
//     body.style.backgroundColor = ballColorsChoice[1];
//     console.log("Clicked");
// }

// function colorGridMaker() {
//     // For the length of the color array. Append a new color button and assign a color as it goes down the index.
//     for (let i=0; i <= ballColorsChoice.length; i++) {
//         // Append child... add a new color box

//     }

// }

function colorGridMaker() {
    for (i=0; i<=ballColorsChoice.length - 1; i++) {;
        const btn = document.createElement("button");
        btn.style.backgroundColor = ballColorsChoice[i];
        btn.classList.add("colors");
        document.getElementById("ballColorsGrid").appendChild(btn);
        btn.addEventListener('click', () => {
            const customBall = document.querySelector('#ballForCustom');
            customBall.style.backgroundColor = btn.style.backgroundColor;
            ballsButton.style.backgroundColor = btn.style.backgroundColor;
            // console.log("Clicked");
        })
    }
    for (i=0; i<=bgColorChoice.length - 1; i++) {;
        const btn = document.createElement("button");
        btn.style.backgroundColor = bgColorChoice[i];
        btn.classList.add("colors");
        document.getElementById("bgColorsGrid").appendChild(btn);
        btn.addEventListener('click', () => {
            const body = document.querySelector('body');
            body.style.backgroundColor = btn.style.backgroundColor;
            // console.log("Clicked");
        })
    }
}

colorGridMaker(); 


// for setTimeout---- add a defualt value that can be changed.  setTimeout(endRound, time) ----- if 10/score = whole number, then add 5 seconds to time (time += 5000).
 
// Main Game !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This will include the random positioned balls, the click interaction, the score board, a timer, and maybe I can implement my own audio

// Random number generator ----- could look at volume slider
// take those numbers and input them into the position for the balls
// only update position when ball is clicked on. Also add one to Scoreboard (Score += 1)
// once game is over, set score value equal to final score value

// gameStart(); COUNTDOWN CODE Area???????????????????????????????????????????
// function gameplay() {
//     setInterval(countDown, 1000);
//     function countDown() {
//         for (i=0; i >= 0; i++) {
//             // const count = document.querySelector('.321');
//             num = 3 - i;
//             count.textContent = num;
//             console.log(num)
//         }
//     }
// }


// while timer is greater than 0:
//      timer = 10
// subract 1 from this with the setInterval going
// let down = 10
// while (down >= 0) {
//     setInterval(countDown, 1000);
//     // countDown();
//     function countDown() {
//         // let down = num;
//         // const down = 10;
//         timer.textContent = down;
//         down -= 1;
//     }
// }

/////// Maybe I will make a time function that holds all the time things. This also might be the way I do the time thing because then I can add time easier with the every ten clicks.

// function time() {
//     let down = 10;
//     timer.textContent = 10;
//     console.log(down);
//     function countdown() {
//         if (down > 0) {
//             down -= 1;
//             console.log(down);
//             timer.textContent = `${down}`;
//             return down;
//         } 
//         else {
//             mainGame.style.display = "none";
//             end.style.display = "block";
//             console.log("time!!!!");
//         }
//     }
//     console.log(down);
//     console.log(countdown());
//     if (countdown() < 10) {
//         setInterval(countdown, 1000);
//         console.log("setInterval");
//     }
// }

    // if ( < 10) {
    //     setInterval(countdown, 1000);
    //     console.log("setInterval");
    // }

//////////HERE is my time area for all the time related functions in the game !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   
let down = 10;
timer.textContent = 10;
let add = 0; // This made the add only go one time but it only goes one time for all of it.

function time(down, add) { // might need to add "add" to the placeholders!
    const timer = document.querySelector('#timer');
    var timed = setInterval(countdo, 1000);
    // timed;
    // setInterval(() => {
    function countdo() {
        function addedLeave() {
            addedTime.style.display = "none";
        }
        if (down > 0) {
            down -= 1;
            // console.log(down);
            timer.textContent = `${down}`;
            // I do wish to find a function that does the things below without having multiple if statements.
            if ((Number.isInteger(gameScore.textContent/10)) && (gameScore.textContent != 0) && (add == 0)) {
                down += 10; // I might add a text box to the side that displays the amount you just added for a second and then disappears. setTimout would work for visibility maybe.
                add++;
                addedTime.style.display = "block";
                addedTime.textContent = "+ 10";
                setTimeout(addedLeave, 1000);
                // console.log(gameScore.textContent);
                // console.log("add" + add);
                // if (add == 1) break;
            }

            if ((Number.isInteger(gameScore.textContent/20)) && (add == 1)) {
                down += 7; // Maybe I could have something that style.display = "block" with a timeout and it will display the amount added.
                add++;
                addedTime.style.display = "block";
                addedTime.textContent = "+ 7";
                setTimeout(addedLeave, 1000);
                // console.log(gameScore.textContent);
                // console.log("add" + add);
                // if (add == 1) break;
            }

            if ((Number.isInteger(gameScore.textContent/30)) && (add == 2)) {
                down += 5;
                add++;
                addedTime.style.display = "block";
                addedTime.textContent = "+ 5";
                setTimeout(addedLeave, 1000);
                // console.log(gameScore.textContent);
                // console.log("add" + add);
                // if (add == 1) break;
            }

            if ((Number.isInteger(gameScore.textContent/40)) && (add == 3)) {
                down += 5;
                add++;
                addedTime.style.display = "block";
                addedTime.textContent = "+ 5";
                setTimeout(addedLeave, 1000);
                // console.log(gameScore.textContent);
                // console.log("add" + add);
                // if (add == 1) break;
            }

            if ((Number.isInteger(gameScore.textContent/50)) && (add == 4)) {
                down += 5;
                add++;
                addedTime.style.display = "block";
                addedTime.textContent = "+ 5";
                setTimeout(addedLeave, 1000);
                // console.log(gameScore.textContent);
                // console.log("add" + add);
                // if (add == 1) break;
            }
            return down;
            //while (Number.isInteger(gameScore.textContent/10)) {
            //     down += 10
            //     add++;
            //     if (add === 1) break;
            // }
        } // for setTimeout---- add a defualt value that can be changed.  setTimeout(endRound, time) ----- if 10/score = whole number, then add 5 seconds to time (time += 5000).
        else {
            // endRound();
            mainGame.style.display = "none";
            end.style.display = "block";
            down = 10;
            // console.log("end");
            clearInterval(timed); ////// We need to stop the set interval once the else is activated.
        }

    }
    // }, 1000);

}


// function down() {
//     count.textContent = num - 1
// } 

// Add 1 sec for every 10 ball clicks
// setTimeout(endRound(), 10000);

// function endRound() { ///// I might be able to take this part out.....!!!
//     mainGame.style.display = "none";
//     end.style.display = "block";
//     down = 10;
//     console.log('times up');
// }

function gameplay(value) {
    let score = value;
    
    function positionx() {
        // ballsButton.style.top = randomPos();
        ballsButton.style.left = `${randomPosx()}px`;
        // ballsButton.style.top = "400px";
        // ballsButton.style.left = "400px";
        // console.log(randomPosx());
    }

    function positiony() {
        ballsButton.style.top = randomPosy() + "px";
        // ballsButton.style.left = randomPos();
        // ballsButton.style.top = "400px";
        // ballsButton.style.left = "400px";
        // console.log(randomPosy());
    }
    // randomPos();

    ballsButton.addEventListener('click', () => {
        // const ballsButton = document.querySelector('#ballsBut');
        positionx();
        positiony();
        score += 1;
        const scored = gameScore.textContent = `${score}`;
        // ballsButton.style.top = "400px";
        // ballsButton.style.left = "400px";
        // ballsButton.style.top = randomPos();
        // ballsButton.style.left = randomPos();
        
        // console.log("Ball Clicked");
        // console.log(score);
        finalScore.textContent = `Final Score: ${scored}`; // Final score implemented here ???????????????
    })
    
    
}
gameplay(0);

// positioning for balls ????????????????????????????????????????????????/
function randomPosx() {
    const random = Math.floor(Math.random()*1200);
    return random; 
}

function randomPosy() {
    const random = Math.floor(Math.random()*650);
    return random; 
}

// Ending Screen !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// This will include the end game screen with a larger display of the score, a button that goes to the home screen, and a button that restarts the game.

// finalScore.textContent = `Final Score: ${scored}`;
// gameScore.textContent;


// These also need to reset the main game to its original values and start the timer again
function restartGo() {
    mainGame.style.display = "block";
    end.style.display = "none";
    gameplay(0);
    // setTimeout(endRound, 10000);
    gameScore.textContent = "0";
    time(10, 0);
    timer.textContent = 10;
}

function homeGo() {
    start.style.display = "block";
    end.style.display = "none";
    gameplay(0);
    gameScore.textContent = "0";
    timer.textContent = 10;
}



//Current issues:
// if you dont click any after restarting, with will stay at the last final value
// The ball now starts at random instead of its original place.
// 
