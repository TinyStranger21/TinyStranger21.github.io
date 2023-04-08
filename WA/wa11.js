const button = document.querySelector('#js-new-quote');
const btn2 = document.querySelector('#js-new-color');
button.addEventListener('click', getQuote);
btn2.addEventListener('click', changingBackground);
const colors = ["#00BBF9", "#FFA9A3", "Yellow", "Orange", "#00F5D4", "Pink", "#E7D7C1", "#CEFF1A", "#B9E6FF", "#7EB77F"]

const body = document.querySelector('body');
const app = document.querySelector('.app');

// const answerButton = document.querySelector("#js-tweet")
// answerButton.addEventListener('click', showAnswer(json.answer))


// fetch("https://animechan.vercel.app/api/random")      !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//           .then((response) => response.json())
//           .then((quote) => console.log(quote));

const endpoint = "https://animechan.vercel.app/api/random"

async function getQuote() {
    console.log("it works");
    try {
        const response = await fetch(endpoint); // awaiting the api
        if(!response.ok) { // if response is not okay or if no response
            throw Error(response.statusText); // send the error to the console
        }
        const json = await response.json();
        // console.log(json.question);
        // console.log(json.answer);
        var backColor = randomValueFromArray(colors);
        displayAnime(json.anime);
        displayChar(json.character);
        displayQuote(json.quote);
        changeColor(backColor);
        
    }
    catch (err) {
        console.log(err)
        alert('Failed to fetch new qoute');
    }
 }

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = `Quote: ${quote}`;
}
// Pre built function for each json we are gathering
function displayChar(character) {
    const characterName = document.querySelector("#js-character-text");
    characterName.textContent = `Character: ${character}`;
}

function displayAnime(anime) {
    const animeName = document.querySelector("#js-anime-text");
    animeName.textContent = `Anime: ${anime}`;
}

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

// var backColor = randomValueFromArray(colors)

function changeColor(color) {
    // const backColor = document.querySelector("") // color of square text. something with .app.background-color
    app.style.backgroundColor = color;
}



function changeBackground(bgcolor) {
    body.style.backgroundColor = bgcolor;
}

function changingBackground() {
    var backgroundC = randomValueFromArray(colors);
    changeBackground(backgroundC); // just calling the set we have in the script but not calling a new one everytime
}


changingBackground();
// function showAnswer(quote) {
//     const answerText = document.querySelector("#js-answer-text");
//     answerText.textContent = quote;
// }
getQuote();